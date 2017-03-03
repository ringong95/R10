import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View, TouchableHighlight } from 'react-native'
import Faves from './faves'
import Loading from './../../components/loading'
import { fetchFavSessions } from './../../redux/actions/fetchactions'

class FavesContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchFavSessions())
  }
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }
  render() {
    const {dataSource} = this.props
    return (
      this.props.doneloading ?
        <Faves dataSource={dataSource} currentNavigatorUID={'faves'} />
        :
        <Loading />
    );
  };
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

const mapStateToProps = (state, ownProps) => {
  return {  
    doneloading: state.loading,
        dataSource: ds.cloneWithRowsAndSections(state.Faves.dataBlob, state.Faves.sectionIds, state.Faves.rowIds),

  }
}

export default connect(mapStateToProps)(FavesContainer);