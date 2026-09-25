export default function BlueprintList({ items = [], onSelect }) {
  if (!items.length) return <p>No hay resultados.</p>
  return (
    <div className="table-wrap">
      <table className="blueprint-table">
        <thead>
          <tr>
            <th>Blueprint Name</th>
            <th>Number of Points</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((bp) => (
            <tr key={bp.name}>
              <td>{bp.name}</td>
              <td>
                {bp.points.length || 0}
              </td>
              <td>
                <button className="btn" onClick={() => onSelect(bp)}>
                  Open
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
