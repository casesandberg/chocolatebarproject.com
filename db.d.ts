// Known Next.js issue: https://github.com/typicode/lowdb/issues/554#issuecomment-1345252506
declare module 'lowdb/node' {
  export * from 'lowdb/lib/node'
}
