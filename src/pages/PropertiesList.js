export default function PropertiesList({ propertyInfo }) {
  return (
    <div className="properties_list">
      <h4>This is the PropertiesList page</h4>
      <h2>Property info</h2>
      <ul>
        {propertyInfo.map((property, index) => (
          <li key={index}>
            Property Type: {property.type}
            Price: {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
