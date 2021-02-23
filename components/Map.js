import React, { Component, PropTypes } from "react";

// import NoSSR from 'react-no-ssr'
// window.mapboxgl = MapboxGl;
import MapboxGl from "mapbox-gl";
class Map extends Component {
  state = {
    map: null
  };

  componentDidMount() {
    // const isServer = typeof window === 'undefined';

    MapboxGl.accessToken =
      "pk.eyJ1IjoibGVncmltIiwiYSI6ImNqNTEzczJ5ZjFxcnQyd3FuOHJuN2RuNmsifQ.MR3lByLywqdaSE1MfXlQmg";

    const map = new MapboxGl.Map({
      container: this.container,
      style: "mapbox://styles/legrim/cj7rs7vf9e1ek2smg8k4um3st",
      maxZoom: 14,
      minZoom: 11.5
    });

    map.jumpTo({ center: this.props.center, zoom: 11.5 });
    map.on("load", (...args) => {
      this.setState({ map });
      this.props.getMapData(map);
    });
    map.on("dragend", (...args) => {
      this.props.getMapData(map);
      this.props.showForm();
    });
    map.on("zoomend", (...args) => {
      this.props.getMapData(map);
      this.props.showForm();
    });
    const nav = new MapboxGl.NavigationControl();
    map.addControl(nav, "top-left");
    map.dragRotate.disable();

    // Disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.center !== this.props.center ||
      nextState.map !== this.state.map ||
      nextProps.mapSize !== this.props.mapSize
    );
  }

  componentWillUpdate() {
    if (this.state.map) {
      this.state.map.jumpTo({ center: this.props.center, zoom: 11.5 });
    }
  }
  componentDidUpdate() {
    if (this.state.map) {
      this.state.map.jumpTo({ center: this.props.center, zoom: 11.5 });
    }
  }

  render() {
    const { children, mapSize } = this.props;
    const { map } = this.state;
    return (
      <div>
        <div
          className="Map"
          style={{ width: mapSize, height: mapSize }}
          ref={x => {
            this.container = x;
          }}
        >
          {map && children}
        </div>

        <style jsx>{`
          .Map {
            cursor: -webkit-grab;
            cursor: -moz-grab;
            position: absolute;

            outline: black solid 0.5vw;
          }
        `}</style>
      </div>
    );
  }
}

export default Map;
