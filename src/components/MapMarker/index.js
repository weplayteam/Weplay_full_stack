import React, { Component } from 'react'

export default class MapMarker extends Component {
    render() {
        return (
            <div className={`border-solid border-8 border-blue-500 rounded-full w-16 h-16 bg-white-100`}>
                {this.props.text ? this.props.text : this.props.children}
            </div>
        )
    }
}
