import css from './transaction-history.module.css'

export const TransactionHistory = ({ items }) => 

  <table className={css.transactionTable}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(item => (
            <tr key={item.id }>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
        </tbody>
    </table>


