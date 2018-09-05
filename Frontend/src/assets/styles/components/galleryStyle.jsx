const TileBarGridListStyle = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200
  },
  titulo: {
    fontSize: "3.3125rem",
    paddingLeft: "16px",
    paddingRight: "16px"
  }
});

export default TileBarGridListStyle;