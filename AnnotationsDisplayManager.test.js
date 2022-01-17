const { annotationDisplayManager } = require('./AnnotationsDisplayManager');

const showMock = jest.fn();
const hideMock = jest.fn();

const tracks = [
  [
    {
      startTime: 2126,
      endTime: 2238,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 265,
      endTime: 1503,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 86,
      endTime: 265,
      show: showMock,
      hide: hideMock
    }
  ],
  [
    {
      startTime: 3061,
      endTime: 3558,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 265,
      endTime: 1765,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 2439,
      endTime: 3072,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 120,
      endTime: 265,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 265,
      endTime: 3030,
      show: showMock,
      hide: hideMock
    }
  ],
  [
    {
      startTime: 1,
      endTime: 10,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 360,
      endTime: 1720,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 100,
      endTime: 1915,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 265,
      endTime: 2796,
      show: showMock,
      hide: hideMock
    }
  ],
  [
    {
      startTime: 265,
      endTime: 265,
      show: showMock,
      hide: hideMock
    },
    {
      startTime: 714,
      endTime: 2966,
      show: showMock,
      hide: hideMock
    }
  ],
  [
    {
      startTime: 140,
      endTime: 265,
      show: showMock,
      hide: hideMock
    }
  ]
];

describe('Unit tests for Annotation Display Manager', () => {
  it('should invoke show and hide when current time is 265 seconds', () => {
    annotationDisplayManager(265, tracks);
    expect(showMock).toHaveBeenCalledTimes(5);
    expect(hideMock).toHaveBeenCalledTimes(4);
  });
});
