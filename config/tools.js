export const mockFetch = (data) => jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => data
  })
);
