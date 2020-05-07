const globalType = global as any;

globalType.___loader = {
  enqueue: jest.fn(),
};
