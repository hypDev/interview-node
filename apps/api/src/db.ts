export const db = {
    query: async (params) => {
        console.log(`Query: `, params)
        return params
    }
}