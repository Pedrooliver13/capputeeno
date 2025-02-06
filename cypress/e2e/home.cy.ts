const categoryBar = (optionFilterId: string) =>
  cy.get(`[data-cy="category-filter"] > #${optionFilterId}`).should("exist");

const getLogo = () => cy.get(".content__logo > a").should("exist");

const getProductCard = (index: number) =>
  cy.get('[data-cy="card"]').eq(index).should("exist");

const getButton = (index: number) =>
  cy.get('[data-cy="button"]').eq(index).should("exist");

const getCartCount = (should: "exist" | "not.exist" = "exist") =>
  cy.get('[data-cy="cart"] > span').should(should);

const getCartCard = (index: number) =>
  cy.get('[data-cy="cart-card"]').eq(index);

const subTotalPrice = () =>
  cy.get(".resume__price > ul").contains("Subtotal de produtos");

const getToast = () => cy.get(".Toastify__toast-body > div").should("exist");

describe("Capputeeno E2E", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("macbook-13");

    cy.intercept("POST", "http://localhost:3333", (req) => {
      req.reply({ fixture: "get-product-list.json" });
    });
  });

  it("Should be possible view product page", () => {
    getProductCard(0).click();
    cy.url().should("include", "/show");
  });

  it("Should be possible add product in cart", () => {
    getProductCard(0).click();
    cy.url().should("include", "/show");

    getButton(0).click();
    cy.url().should("include", "/cart");

    getCartCount().should("have.text", "1");
    getCartCard(0).should("be.visible");
  });

  it("Should be possible add many products in cart", () => {
    getProductCard(0).click();
    cy.url().should("contain", "/show");

    getButton(0).click();
    cy.url().should("contain", "/cart");

    getCartCount().should("have.text", "1");
    getCartCard(0).should("be.visible");

    getLogo().click();
    getProductCard(1).click();
    cy.url().should("contain", "/show");

    getButton(0).click();
    cy.url().should("contain", "/cart");

    getCartCount().should("have.text", "2");
    getCartCard(1).should("be.visible");
  });

  it("Should be possible remove product in cart", () => {
    getProductCard(0).click();
    cy.url().should("contain", "/show");

    getButton(0).click();
    cy.url().should("contain", "/cart");

    getCartCount().should("have.text", "1");
    getCartCard(0).should("be.visible");

    getCartCard(0).get(".content__header > svg").should("be.visible").click();

    getCartCount("not.exist");
    cy.get('[data-cy="cart-card"]').should("not.exist");
  });

  it("Should be possible storage products in localStorage", () => {
    getProductCard(0).click();
    cy.url().should("contain", "/show");

    getButton(0).click();
    cy.url().should("contain", "/cart");

    getCartCount().should("have.text", "1");
    getCartCard(0).should("be.visible");

    cy.reload();

    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": {
          "@capputeeno:cart-state-1.0.0":
            '[{"id":"fedf091d-a34b-4406-91b1-42e5224798b0","name":"Caneca de cerâmica rústica","description":"Doloribus molestiae aliquid. Ad amet vel aperiam quo laborum. Fugiat est eos nulla. Et voluptatibus consequatur iste vero consequatur ipsa est velit. Fuga dolores aut vero.","category":"mugs","image_url":"https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg","created_at":"2023-10-31T02:09:19.172Z","price_in_cents":4488,"sales":0,"quantity":1}]',
        },
      });
    });

    getCartCount().should("have.text", "1");
    getCartCard(0).should("be.visible");

    getLogo().click();
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": {
          "@capputeeno:cart-state-1.0.0":
            '[{"id":"fedf091d-a34b-4406-91b1-42e5224798b0","name":"Caneca de cerâmica rústica","description":"Doloribus molestiae aliquid. Ad amet vel aperiam quo laborum. Fugiat est eos nulla. Et voluptatibus consequatur iste vero consequatur ipsa est velit. Fuga dolores aut vero.","category":"mugs","image_url":"https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg","created_at":"2023-10-31T02:09:19.172Z","price_in_cents":4488,"sales":0,"quantity":1}]',
        },
      });
    });
  });

  it("should be possible to increase the quantity of the same product", () => {
    getProductCard(0).click();
    cy.url().should("contain", "/show");

    getButton(0).click();
    cy.url().should("contain", "/cart");

    getCartCount().should("have.text", "1");
    getCartCard(0).should("be.visible");

    getCartCard(0).get("select").select("2");
    getCartCount().should("have.text", "2");

    getCartCard(0).get("select").select("3");
    getCartCount().should("have.text", "3");
  });

  it("Should calculate the price correctly", () => {
    getProductCard(0).click();
    cy.url().should("contain", "/show");

    getButton(0).click();
    cy.url().should("contain", "/cart");

    getCartCount().should("have.text", "1");
    getCartCard(0)
      .should("be.visible")
      .get(".content__footer--price")
      .contains("44,88")
      .should("exist");

    getCartCard(0).get("select").select("2");
    getCartCount().should("have.text", "2");
    subTotalPrice().contains("89,76").should("exist");

    getCartCard(0).get("select").select("3");
    getCartCount().should("have.text", "3");
    subTotalPrice().contains("134,64").should("exist");
  });

  it("Should be possible buy a product", () => {
    getProductCard(0).click();
    cy.url().should("contain", "/show");

    getButton(0).click();
    cy.url().should("contain", "/cart");

    getCartCount().should("have.text", "1");
    getCartCard(0).should("be.visible");

    getButton(0).click();
    getToast().contains("Compra finalizada com sucesso!").should("be.visible");
  });
});
