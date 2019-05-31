import Http from './http'

export const getAll = async (deliverId = 1) => {
  const response = await Http.get(`/deliveries/${deliverId}/containers/`)

  return response.data
}
