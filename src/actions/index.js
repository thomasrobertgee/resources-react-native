export const selectLibrary = (libraryId) => { // action creater
  return {
    type: 'select_library',
    payload: libraryId
  }
}
