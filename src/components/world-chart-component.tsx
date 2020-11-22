import React from "react";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import { G, Line } from "react-native-svg";
import moment from "moment";

import { Dimensions, StyleSheet, View } from "react-native";
import { COLORS } from "../styles/styles";

// class WorldChart extends React.PureComponent {
//   render() {
//     // const data = [214889, 181388, 199127, 175582, 172170, 196236, 209108, 205620, 289182, 218307];
//     const data = [
//       {
//         value: 50,
//         date: new Date(2020, 0, 1, 2),
//       },
//       {
//         value: 10,
//         date: new Date(2020, 0, 1, 9),
//       },
//       {
//         value: 150,
//         date: new Date(2020, 0, 1, 10),
//       },
//       {
//         value: 10,
//         date: new Date(2020, 0, 1, 13),
//       },
//       {
//         value: 100,
//         date: new Date(2020, 0, 1, 21),
//       },
//       {
//         value: 20,
//         date: new Date(2020, 0, 2, 0),
//       },
//       {
//         value: 115,
//         date: new Date(2020, 0, 2, 8),
//       },
//       {
//         value: 75,
//         date: new Date(2020, 0, 2, 10),
//       },
//       {
//         value: 25,
//         date: new Date(2020, 0, 2, 16),
//       },
//       {
//         value: 125,
//         date: new Date(2020, 0, 2, 17),
//       },
//       {
//         value: 66,
//         date: new Date(2020, 0, 2, 19),
//       },
//       {
//         value: 85,
//         date: new Date(2020, 0, 2, 23),
//       },
//     ];

//     const axesSvg = { fontSize: 10, fill: "grey" };
//     const verticalContentInset = { top: 10, bottom: 10 };
//     const xAxisHeight = 30;

//     return (
//       <View style={{ height: 250, padding: 5, flexDirection: "row" }}>
//         <YAxis data={data} style={{ marginBottom: xAxisHeight }} contentInset={verticalContentInset} svg={axesSvg} />
//         <View style={{ flex: 1, marginLeft: 0 }}>
//           <LineChart style={{ flex: 1 }} data={data} contentInset={verticalContentInset} svg={{ stroke: COLORS.cloudBlue }}>
//             <Grid />
//           </LineChart>
//           <XAxis style={{ marginHorizontal: -10, height: xAxisHeight }} data={data} formatLabel={(value) => "Day" + value} contentInset={{ left: 10, right: 10 }} svg={axesSvg} />
//         </View>
//       </View>
//     );
//   }
// }

// export default WorldChart;

const data = [
  {
    value: 50,
    date: new Date(2020, 7, 1, 2),
  },
  {
    value: 10,
    date: new Date(2020, 7, 11, 9),
  },
  {
    value: 150,
    date: new Date(2020, 7, 21, 10),
  },
  {
    value: 10,
    date: new Date(2020, 8, 1, 13),
  },
  {
    value: 100,
    date: new Date(2020, 8, 11, 21),
  },
  {
    value: 20,
    date: new Date(2020, 8, 21, 0),
  },
  {
    value: 115,
    date: new Date(2020, 9, 1, 8),
  },
];

interface ICustomGrid {
  x: number;
  y: number;
  data: any;
  ticks: any;
}

export default class WorldChart extends React.Component {
  renderChart() {
    const xAxisHeight = 30;
    const verticalContentInset = { top: 10, bottom: 10 };

    // const CustomGrid = ({ x, y, data, ticks }) => (
    //   <G>
    //     {
    //       // Horizontal grid
    //       ticks.map((tick) => (
    //         <Line key={tick} x1={"0%"} x2={"100%"} y1={y(tick)} y2={y(tick)} stroke={"rgba(0,0,0,0.2)"} />
    //       ))
    //     }
    //     {
    //       // Vertical grid
    //       data.map((value, index) => (
    //         <Line key={index} y1={"0%"} y2={"100%"} x1={x(value)} x2={x(value)} stroke={"red"} />
    //       ))
    //     }
    //   </G>
    // );

    return (
      <View style={{ height: 250, padding: 0, width: "90%", flexDirection: "row" }}>
        <YAxis
          style={{ marginBottom: xAxisHeight }}
          data={data}
          contentInset={verticalContentInset}
          yAccessor={({ item }) => item.value}
          // xAccessor={({ item }) => item.date}
          svg={{
            fill: "#000",
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={verticalContentInset}
            yAccessor={({ item }) => item.value}
            // xAccessor={({ item }) => item.date}
            svg={{
              stroke: "#81B0C0",
            }}
            // scale={scale.scaleTime}
            numberOfTicks={10}
          >
            <Grid />
            {/* <CustomGrid belowChart={true} /> */}
          </LineChart>
          <XAxis
            data={data}
            svg={{
              fill: "#000",
              fontSize: 8,
              fontWeight: "bold",
              rotation: 20,
              originY: 30,
              y: 5,
            }}
            xAccessor={({ item }) => item.date}
            scale={scale.scaleTime}
            numberOfTicks={10}
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            // contentInset={verticalContentInset}
            formatLabel={(value) => moment(value).format("MMM DD")}
          />
        </View>
      </View>
    );
  }
  render() {
    return <View style={styles.container}>{this.renderChart()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
