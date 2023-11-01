// Packages
import { ReactElement } from 'react';
import { notFound } from 'next/navigation';

// Services
import { getOneProduct } from 'services/products';

// Templates
import { ShowTemplate } from 'templates';

interface ShowProps {
  params: { id: string };
}

const Show = async (props: ShowProps): Promise<ReactElement> => {
  const { data } = await getOneProduct({ id: props.params.id });

  if (!data.product) return notFound();

  return <ShowTemplate product={data.product} />;
};

export default Show;
