type PhotoParams = {
  params: {
    id: number,
  }
};


export default function PhotoId(
  { params: { id } }: PhotoParams) {
  return (
    <h1>Foto por ID: {id}</h1>
  );
};