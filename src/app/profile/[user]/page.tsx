type UserParams = {
  params: {
    user: string,
  }
};

export default function UserProfile(
  { params: { user } }: UserParams) {
  return (
    <h1>User Profile: </h1>
  );
};