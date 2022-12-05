import styled from "styled-components";

const Optional = () => {
  return (
    <Wrap>
      <OrderBox>
        <input type="radio" />
        desc
        <input type="radio" />
        asc
      </OrderBox>
      <SortBox></SortBox>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  margin-bottom: 5px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderBox = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  align-items: center;
  input {
    margin: 0px 5px 0px 10px;
    font-size: 1.5rem;
  }
`;
const SortBox = styled.div`
  width: 20%;
  height: 30px;
`;
export default Optional;
