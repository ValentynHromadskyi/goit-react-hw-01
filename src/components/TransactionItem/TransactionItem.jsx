export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td type="">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
