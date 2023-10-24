// Packages
import { ReactElement } from 'react';
import {
  CaretLeft as CaretLeftIcon,
  CaretRight as CaretRightIcon,
} from 'phosphor-react';

// Styles
import * as Styled from './styles';

export const Pagination = (): ReactElement => {
  return (
    <Styled.PaginationContainer className="container">
      <ul>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>
          <CaretLeftIcon />
        </li>
        <li>
          <CaretRightIcon />
        </li>
      </ul>
    </Styled.PaginationContainer>
  );
};
