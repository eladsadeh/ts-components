export type UserData = {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  active: boolean,
}
export type UserSliceState = {
  user: UserData | null,
  loading: boolean,
  sessionCreated: boolean,
  error: string,
  userUpdateInProgress: boolean,
  userUpdateMessage: string | null,
};
export type LoginRequest = {
  email: string,
  password: string,
}
export type EditUserRequest = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}
