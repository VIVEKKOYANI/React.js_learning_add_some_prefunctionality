const isObject = x => typeof x === "object" && x !== null;

export default function RecursivComponent({data}) {
  if(!isObject(data)){
    return (
      <li>{data}</li>
    )
  }

  const pairs = Object.entries(data);

  return (
    <>
    {pairs.map(([key, value]) => (
      <li>
        {key}:
        <ul>
          <RecursivComponent data={value} />
        </ul>
      </li>
    ))}
    </>
  )
}