import React from 'react';
import { Graph } from 'react-d3-graph';
// graph payload (with minimalist structure)
const data = {
  nodes: [
    { id: 'start', renderLabel: 'false', color: 'grey' },
    { id: '1', renderLabel: 'false' },
    { id: '2', renderLabel: 'false' },
    { id: '3', renderLabel: 'false' },
    { id: '4', renderLabel: 'false' },
    { id: '5', renderLabel: 'false' },
    { id: '6', renderLabel: 'false' },
    { id: 'end', renderLabel: 'false', color: 'grey' },
  ],
  links: [
    { source: 'start', target: '1', label: 'B' },
    { source: '1', target: '2', label: 'T' },
    { source: '1', target: '3', label: 'P' },
    { source: '2', target: '2', label: 'S' },
    { source: '2', target: '4', label: 'X' },
    { source: '3', target: '3', label: 'T', type: 'CURVE_SMOOTH' },
    { source: '3', target: '5', label: 'V' },
    { source: '4', target: '3', label: 'X' },
    { source: '4', target: '6', label: 'S' },
    { source: '5', target: '6', label: 'V' },
    { source: '5', target: '4', label: 'P' },
    { source: '6', target: 'end', label: 'E' },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: false,
  directed: true,
  node: {
    color: 'black',
    size: 120,
  },
  link: {
    renderLabel: true,
  },
};

const onClickNode = function (nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function (source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const nodeStyle = { fill: 'none', strokeWidth: '.5', stroke: '#000' };
const textStyle = {
  fill: '#000',
  fontFamily: 'Open Sans',
  fontSize: '6px',
  fontWeight: '800',
  letterSpacing: '0px',
  lineHeight: '1.25',
  strokeWidth: '.529',
};
const textStyleSub = {
  fill: '#000',
  fontFamily: 'Open Sans',
  fontSize: '6px',
  fontWeight: '800',
  letterSpacing: '0px',
  lineHeight: '1.25',
  strokeWidth: '.529',
  baselineShift: 'sub',
};
const edgeStyle = {
  strokeWidth: '.529',
  stroke: '#000',
};
const edgeStyle2 = {
  strokeWidth: '.529',
  stroke: '#000',
  fill: 'none',
};

export const GraphThingy = ({ currentSMState }) => {
  return (
    <svg
      width="50vw"
      height="50vh"
      version="1.1"
      viewBox="0 0 212 106"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -191)">
        <circle
          id="node_q2"
          cx="83.8"
          cy="213"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <circle
          id="node_q5"
          cx="133"
          cy="213"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <circle
          id="node_q3"
          cx="83.5"
          cy="275"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <circle
          id="node_q4"
          cx="134"
          cy="275"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <circle
          id="node_q0"
          cx="19.3"
          cy="244"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <circle
          id="node_q1"
          cx="63.6"
          cy="244"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <circle
          id="node_q6"
          cx="153"
          cy="244"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <circle
          id="node_q7"
          cx="198"
          cy="244"
          r="7.58"
          style={nodeStyle}
          className="node"
        />
        <text x="134.01122" y="246.43686" style={textStyle}>
          <tspan x="134.01122" y="246.43686">
            P
          </tspan>
        </text>
        <text x="15.938194" y="245.5043" style={textStyle}>
          <tspan x="15.938194" y="245.5043" style={textStyle}>
            Q<tspan style={textStyleSub}>0</tspan>
          </tspan>
        </text>
        <text x="60.599377" y="245.5043" style={textStyle}>
          <tspan x="60.599377" y="245.5043" style={textStyle}>
            Q<tspan style={textStyleSub}>1</tspan>
          </tspan>
        </text>
        <text x="80.211899" y="276.60358" style={textStyle}>
          <tspan x="80.211899" y="276.60358" style={textStyle}>
            Q<tspan style={textStyleSub}>3</tspan>
          </tspan>
        </text>
        <text x="130.16071" y="276.62192" style={textStyle}>
          <tspan x="130.16071" y="276.62192" style={textStyle}>
            Q<tspan style={textStyleSub}>4</tspan>
          </tspan>
        </text>
        <text x="149.85851" y="245.5043" style={textStyle}>
          <tspan x="149.85851" y="245.5043" style={textStyle}>
            Q<tspan style={textStyleSub}>6</tspan>
          </tspan>
        </text>
        <text x="130.18498" y="214.33961" style={textStyle}>
          <tspan x="130.18498" y="214.33961" style={textStyle}>
            Q<tspan style={textStyleSub}>5</tspan>
          </tspan>
        </text>
        <text x="80.481117" y="214.05614" style={textStyle}>
          <tspan x="80.481117" y="214.05614" style={textStyle}>
            Q<tspan style={textStyleSub}>2</tspan>
          </tspan>
        </text>
        <text x="194.62517" y="245.52264" style={textStyle}>
          <tspan x="194.62517" y="245.52264" style={textStyle}>
            Q<tspan style={textStyleSub}>7</tspan>
          </tspan>
        </text>
        <text x="35.279579" y="243.01154" style={textStyle}>
          <tspan x="35.279579" y="243.01154" style={textStyle}>
            B
          </tspan>
        </text>
        <text x="82.051743" y="294.86719" style={textStyle}>
          <tspan x="82.051743" y="294.86719" style={textStyle}>
            T
          </tspan>
        </text>
        <text x="66.282845" y="261.18585" style={textStyle}>
          <tspan x="66.282845" y="261.18585" style={textStyle}>
            P
          </tspan>
        </text>
        <text x="104.76965" y="280.16199" style={textStyle}>
          <tspan x="104.76965" y="280.16199" style={textStyle}>
            V
          </tspan>
        </text>
        <text x="105.30419" y="240.60611" style={textStyle}>
          <tspan x="105.30419" y="240.60611" style={textStyle}>
            X
          </tspan>
        </text>
        <text x="81.249931" y="197.30844" style={textStyle}>
          <tspan x="81.249931" y="197.30844" style={textStyle}>
            S
          </tspan>
        </text>
        <text x="104.90685" y="212.11295" style={textStyle}>
          <tspan x="104.90685" y="212.11295" style={textStyle}>
            X
          </tspan>
        </text>
        <text x="67.174713" y="230.28728" style={textStyle}>
          <tspan x="67.174713" y="230.28728" style={textStyle}>
            T
          </tspan>
        </text>
        <text x="144.49944" y="265.03232" style={textStyle}>
          <tspan x="144.49944" y="265.03232" style={textStyle}>
            V
          </tspan>
        </text>
        <text x="170.77087" y="243.11621" style={textStyle}>
          <tspan x="170.77087" y="243.11621" style={textStyle}>
            E
          </tspan>
        </text>
        <text x="142.43184" y="225.47643" style={textStyle}>
          <tspan x="142.43184" y="225.47643" style={textStyle}>
            S
          </tspan>
        </text>
        <g id="edge_B" className="edge" style={edgeStyle}>
          <path d="m27 244h28.3v0.023" />
          <path d="m55.3 244-3.51 2.03v-4.05l1.75 1.01z" />
        </g>
        <g id="edge_V1" className="edge" style={edgeStyle}>
          <path d="m91.2 275h33.8v0.0208" />
          <path d="m125 275-3.51 2.03v-4.05l1.75 1.01z" />
        </g>
        <g id="edge_X1" className="edge" style={edgeStyle}>
          <path d="m91.2 213h33.7v0.0208" />
          <path d="m125 213-3.51 2.03v-4.05l1.75 1.01z" />
        </g>
        <g id="edge_E" className="edge" style={edgeStyle}>
          <path d="m161 244h28.7v0.0229" />
          <path d="m190 244-3.51 2.03v-4.05l1.75 1.01z" />
        </g>
        <g id="edge_S2" className="edge" style={edgeStyle}>
          <path d="m138 219 9.38 14.8-0.0115 0.0182 1.83 2.8" />
          <path
            transform="rotate(45 148 244)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
          />
        </g>
        <g id="edge_P1" className="edge" style={edgeStyle}>
          <path d="m67.7 250 9.24 15.1-0.0114 0.0186 1.81 2.85" />
          <path
            transform="rotate(58.4 84.3 195)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
          />
        </g>
        <g id="edge_T2" className="edge" style={edgeStyle2}>
          <path
            transform="matrix(-1 0 0 1 166 1)"
            d="m89 280c1.78 2.06 2.56 4.95 2.05 7.63-0.506 2.68-2.28 5.08-4.69 6.35-1.87 0.988-4.1 1.29-6.17 0.843s-3.97-1.65-5.27-3.32-1.98-3.82-1.89-5.93c0.086-2.12 0.94-4.19 2.37-5.76"
          />
          <path
            transform="rotate(61 71.5 205)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
          />
        </g>
        <g id="edge_T1" className="edge" style={edgeStyle}>
          <path d="m67.5 238 9.19-15-0.0113-0.0185 1.79-2.84" />
          <path
            transform="rotate(-60.4 94.8 285)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
          />
        </g>
        <g id="edge_S1" className="edge" style={edgeStyle2}>
          <path
            transform="rotate(180 82.8 244)"
            d="m89 280c1.78 2.06 2.56 4.95 2.05 7.63-0.506 2.68-2.28 5.08-4.69 6.35-1.87 0.988-4.1 1.29-6.17 0.843s-3.97-1.65-5.27-3.32-1.98-3.82-1.89-5.93c0.086-2.12 0.94-4.19 2.37-5.76"
          />
          <path
            transform="rotate(63 135 169)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
          />
        </g>
        <g id="edge_X2" className="edge" style={edgeStyle}>
          <path d="m129 219-33.8 41.7-0.0417-0.0515-6.38 8.15" />
          <path
            transform="rotate(129 109 241)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
            style={edgeStyle}
          />
        </g>
        <g id="edge_V2" className="edge" style={edgeStyle}>
          <path d="m138 269 9.33-14.9-0.0115-0.0183 1.82-2.81" />
          <path
            transform="rotate(59.7 132 251)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
          />
        </g>
        <g id="edge_P2" className="edge" style={edgeStyle}>
          <path d="m134 268v-42.3h-0.0337v-4.14" />
          <path
            transform="rotate(-89.4 130 235)"
            d="m144 238-3.51 2.03v-4.05l1.75 1.01z"
          />
        </g>
      </g>
    </svg>
  );
};
