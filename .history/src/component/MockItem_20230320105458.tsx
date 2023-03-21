import { MockResponse } from '../api/types/mock';
import styled from 'styled-components';

interface Props {
  item: MockResponse;
}
export default function MockItem({ item }: Props) {
  const { id, transaction_time, status, customer_id, customer_name, currency } =
    item;

  return (
    <>
      <Item>{id}</Item>
      <Item>{customer_id}</Item>
      <Item>{status ? '처리됨' : '안됨'}</Item>
      <Item>{currency}</Item>
      <Item>{transaction_time}</Item>
      <Item>{customer_name}</Item>
    </>
  );
}

const Container = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr 1fr;
  grid-auto-rows: minmax(40px, 40px);
  grid-row-gap: 0.2rem;
  margin-top: 0.2rem;
`;

const Item = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
