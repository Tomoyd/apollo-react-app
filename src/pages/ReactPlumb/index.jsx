import { jsPlumb } from 'jsplumb';
import React, { useEffect, useRef } from 'react';
import LongBar from './components/LongBar';
import PlumbNode from './components/PlumbNode';
import { data } from './data';
import './index.css';

const SymbolGap = ({ symbolText = '+', show = true }) => {
  return show ? <div className="symbol">{symbolText}</div> : null;
};

const Index = ({}) => {
  const instance = jsPlumb.getInstance();
  const toggleRef = useRef(null);

  const commonOption = {
    endpoint: 'Blank',
    connectorClass: 'connectClass',
    connector: [
      'Flowchart',
      {
        alwaysRespectStubs: true,
        cornerRadius: 4,
        midpoint: 0.5,
        alwaysRespectStubs: true,
        stub: 1,
      },
    ],
    paintStyle: { stroke: '#456', strokeWidth: 2 },
    hoverPaintStyle: {
      // outlineStroke: 'lightblue',
      strokeWidth: 4,
    },

    anchors: [
      [0, 0.5, -1, 0],
      [0.1, 1, 0, 1],
    ],
    ConnectionsDetachable: false,
  };

  useEffect(() => {
    function toggleDraw() {
      instance.connect({
        target: 'column31',
        source: 'bar1',
        ...commonOption,
        // connector: ['Straignt'],
        anchors: [
          [0.5, 0, 0, -1],
          [0.5, 1, 0, 1],
        ],
      });
      instance.connect({
        target: 'column41',
        source: 'bar1',
        ...commonOption,
        // connector: ['Straignt'],
        anchors: [
          [0.5, 0, 0, -1],
          [0.5, 1, 0, 1],
        ],
      });
      instance.connect({
        target: 'bar1',
        source: 'bar2',
        ...commonOption,
        // connector: ['Straignt'],
        anchors: [
          [0.5, 0, 0, -1],
          [0.5, 1, 0, 1],
        ],
      });
      instance.connect({
        target: 'bar2',
        source: 'bar3',
        ...commonOption,
        // connector: ['Straignt'],
        anchors: [
          [0.5, 0, 0, -1],
          [0.5, 1, 0, 1],
        ],
      });
    }
    function secondDraw() {
      instance.connect({
        target: 'total',
        source: '10',
        ...commonOption,
        anchors: [
          [0.5, 0, 0, -1],
          [0.5, 1, 0, 1],
        ],
      });
      instance.connect({
        target: '11',
        source: '20',
        ...commonOption,
      });
      instance.connect({
        target: '20',
        source: '30',
        ...commonOption,
      });
      Array(4)
        .fill()
        .forEach((item, index) => {
          const targetId = index === 0 ? '31' : 'column1' + (index - 1);
          const sourceId = 'column1' + index;
          console.log({ targetId, sourceId });
          instance.connect({
            target: `${targetId}`,
            source: sourceId,
            connector: ['Flowchart'],
            ...commonOption,
            anchors: [
              [0.5, 0, 0, -1],
              [0.5, 1, 0, 1],
            ],
          });
        });
      instance.connect({
        target: '32',
        source: 'column20',
        ...commonOption,
        anchors: [
          [0.5, 0, 0, -1],
          [0.5, 1, 0, 1],
        ],
      });

      Array(2)
        .fill()
        .forEach((item, index) => {
          const targetId = index === 0 ? '33' : 'column3' + (index - 1);
          const sourceId = 'column3' + index;
          console.log({ targetId, sourceId });
          instance.connect({
            target: `${targetId}`,
            source: sourceId,
            connector: ['Flowchart'],
            ...commonOption,
            anchors: [
              [0.5, 0, 0, -1],
              [0.5, 1, 0, 1],
            ],
          });
        });

      Array(2)
        .fill()
        .forEach((item, index) => {
          const targetId = index === 0 ? '34' : 'column4' + (index - 1);
          const sourceId = 'column4' + index;

          instance.connect({
            target: `${targetId}`,
            source: sourceId,
            connector: ['Flowchart'],
            ...commonOption,
            anchors: [
              [0.5, 0, 0, -1],
              [0.5, 1, 0, 1],
            ],
          });
        });
      Array(4)
        .fill()
        .forEach((item, index) => {
          const targetId = index === 0 ? '35' : 'column5' + (index - 1);
          const sourceId = 'column5' + index;
          console.log({ targetId, sourceId });
          instance.connect({
            target: `${targetId}`,
            source: sourceId,
            connector: ['Flowchart'],
            ...commonOption,
            anchors: [
              [0.5, 0, 0, -1],
              [0.5, 1, 0, 1],
            ],
          });
        });
      Array(3)
        .fill()
        .forEach((item, index) => {
          const targetId = index === 0 ? '36' : 'column6' + (index - 1);
          const sourceId = 'column6' + index;
          console.log({ targetId, sourceId });
          instance.connect({
            target: `${targetId}`,
            source: sourceId,
            connector: ['Flowchart'],
            ...commonOption,
            anchors: [
              [0.5, 0, 0, -1],
              [0.5, 1, 0, 1],
            ],
          });
        });

      instance.connect({
        target: `bbar0`,
        source: 'bbar1',
        connector: ['Flowchart'],
        ...commonOption,
        anchors: [
          [0.5, 0, 0, -1],
          [0.5, 1, 0, 1],
        ],
      });

      instance.connect({
        target: 'column40',
        source: 'column44',
        ...commonOption,
        connector: [
          'Bezier',
          {
            curviness: -18,
            // alwaysRespectStubs: true,
            cornerRadius: 10,
            midpoint: 0.5,
            // alwaysRespectStubs: true,
            stub: 20,
          },
        ],
        anchors: [
          [1, 0.5, 1, 1],
          [1, 0.5, 1, -1],
        ],
      });

      instance.connect({
        target: 'column10',
        source: 'bbar0',
        ...commonOption,
        connector: [
          'Bezier',
          {
            curviness: 18,
            // alwaysRespectStubs: true,
            cornerRadius: 10,
            midpoint: 0.5,
            // alwaysRespectStubs: true,
            stub: 20,
          },
        ],
        anchors: [
          [0.5, 0, 0, -1],
          [1, 0.5, 1, 1],
        ],
      });

      instance.connect({
        target: 'column30',
        source: 'bbar0',

        ...commonOption,
        connector: [
          'Bezier',
          {
            curviness: 18,
            cornerRadius: 10,
            midpoint: 0.5,
            stub: 20,
          },
        ],
        anchors: [
          [0.5, 0, 0, -1],
          [0, 0.5, -1, 1],
        ],
      });
    }

    instance.ready(() => {
      instance.bind('click', (coon, origin) => {
        if (coon.sourceId !== '30') {
          return false;
        }
        console.log('12343', toggleRef.current.style.visibility);

        if (toggleRef.current.style.visibility === 'hidden') {
          toggleRef.current.style.visibility = 'visible';
          toggleDraw();
          return;
        }
        instance.deleteEveryEndpoint();
        secondDraw();

        toggleRef.current.style.visibility = 'hidden';
      });
      instance.bind('mouseover', (conn, origin) => {
        console.log(conn.getPaintStyle());
        conn.target.style.backgroundColor = '#FFFF00';
        conn.source.style.backgroundColor = '#FFFF00';
        document.documentElement.style.cursor = 'pointer';
      });
      instance.bind('mouseout', (conn, origin) => {
        const mapColor = {
          bar: '#81b3E6',
          bba: '#7acdb7',
        };
        conn.setPaintStyle({ stroke: '#456', strokeWidth: 2 });
        conn.repaint();
        conn.target.style.backgroundColor =
          mapColor[conn.target.id.substring(0, 3)] || '#EEEEEE';
        conn.source.style.backgroundColor =
          mapColor[conn.source.id.substring(0, 3)] || '#EEEEEE';

        document.documentElement.style.cursor = 'auto';
      });

      secondDraw();
      toggleDraw();
    });
    const handleResize = () => {
      instance.deleteEveryEndpoint();
      secondDraw();
      if (toggleRef.current.style.visibility !== 'hidden') {
        toggleDraw();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // cleanup
      instance.cleanupListeners();
      instance.deleteEveryEndpoint();
      instance = null;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="container">
      <PlumbNode id="total"></PlumbNode>
      <div className="container1 flex-container">
        {data[0].map((item, index) => {
          return (
            <>
              <PlumbNode {...item} key={index} id={'1' + index}></PlumbNode>
              <SymbolGap show={index < 1}></SymbolGap>
            </>
          );
        })}
      </div>
      <div className="container2 flex-container">
        {data[1].map((item, index) => {
          return (
            <>
              <PlumbNode
                {...item}
                barBgColor="#f1b61c"
                key={index}
                id={'2' + index}
                isEnd={true}
              ></PlumbNode>
              <SymbolGap show={index < 1} symbolText="÷"></SymbolGap>
            </>
          );
        })}
      </div>
      <div className="flex-container container3">
        {data[2].map((item, index) => {
          return (
            <>
              <PlumbNode
                {...item}
                barBgColor="#67d0a7"
                key={index}
                id={'3' + index}
                isEnd={true}
              ></PlumbNode>
              <SymbolGap show={index < 6}></SymbolGap>
            </>
          );
        })}
      </div>
      <div className="second">
        <div className="row flex-container">
          {data[2]
            .filter((item, index) => index > 0)
            .map((item) => {
              return item.links[0];
            })
            .map((item, index) => {
              return (
                <>
                  <PlumbNode
                    {...item}
                    id={'column' + (index + 1) + '0'}
                  ></PlumbNode>
                  <SymbolGap show={index < 5} symbolText=" "></SymbolGap>
                </>
              );
            })}
        </div>
        <div className="row flex-container">
          {data[2]
            .filter((item, index) => item.links && item.links[1])
            .map((item) => {
              return item.links[1];
            })
            .map((item, index) => {
              return (
                <>
                  <PlumbNode
                    {...item}
                    style={index === 1 ? { marginLeft: '160px' } : null}
                    id={index === 0 ? 'column11' : 'column' + (index + 2) + '1'}
                  ></PlumbNode>
                  <SymbolGap show={index < 4} symbolText=" "></SymbolGap>
                </>
              );
            })}
        </div>
        <div className="row flex-container">
          {Array(4)
            .fill()
            .map((item, index) => {
              return (
                <>
                  {index === 1 ? (
                    <div
                      style={{ marginLeft: '160px' }}
                      ref={toggleRef}
                      className="bar-container"
                    >
                      {data[2][3].links[1].links.map((item, index) => {
                        return (
                          <LongBar
                            {...item}
                            plumbNum={2}
                            id={'bar' + (index + 1)}
                          ></LongBar>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <div style={{ width: '120px', verticalAlign: 'top' }}>
                        <PlumbNode
                          {...(index === 0
                            ? data[2][index + 1].links[2]
                            : data[2][index + 3].links[2])}
                          id={
                            index === 0
                              ? 'column12'
                              : 'column' + (index + 3) + '2'
                          }
                        ></PlumbNode>
                        {index < 3 && (
                          <PlumbNode
                            {...(index === 0
                              ? data[2][1].links[3]
                              : data[2][index + 3].links[3])}
                            style={{ marginTop: '30px', verticalAlign: 'top' }}
                            id={
                              index === 0
                                ? 'column13'
                                : 'column' + (index + 3) + '3'
                            }
                          ></PlumbNode>
                        )}
                      </div>
                    </>
                  )}
                  <SymbolGap show={index < 4} symbolText=" "></SymbolGap>
                </>
              );
            })}
        </div>
        <div className="row flex-container">
          <div className="bbar-container">
            {data[3][0].map((item, index) => {
              return (
                <div
                  key={'bbar' + index}
                  className="bbar myBar"
                  id={'bbar' + index}
                >
                  <div>{item.title}</div>
                  <div>{item.days} 天</div>
                  <div>环比：{item.MonMonRadio}</div>
                </div>
              );
            })}
          </div>
          <PlumbNode
            {...data[3][1]}
            barBgColor="#f3c474"
            style={{ marginLeft: '40px' }}
            id="column44"
          ></PlumbNode>
        </div>
      </div>
    </div>
  );
};

export default Index;
