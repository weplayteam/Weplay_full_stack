import React, {Component} from "react";
import { connect } from "react-redux";


// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// // Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm} from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

// import { StreamApp} from 'react-activity-feed';
// import 'react-activity-feed/dist/index.es.css';


// 
var stream = require('getstream');
class UserProfile extends Component {

    constructor(props) {
        super(props)
        // this.state={links:""}
        // const {auth} = props 
        // this.element = React.createRef()
    }
    
  render(){
    const {userToken} = this.props
    console.log(userToken)
    
    var client = stream.connect('9xvgkcwbd776', userToken,  '56077');
    return(
      <div>
        {/* <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
                className={'fixed inset-auto h-screen z-0 bg-black text-white'}
                //   style={{
                //     height:"50%",
                //     position: 'absolute'
                //   }}
                  >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Profile
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="message">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Messaging
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="pay">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Send Money
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="news">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            News Feed
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Facilities
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Houston Facility
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                OKC Facility
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav> */}
             {/* <div className={`flex flex-col overflow-y-auto`}>
              <div className={`p-12 bg-white rounded shadow-lg rounded mt-24 w-3\/4 mx-auto`}>
                  <label className={`my-6`}>{"Post Title"}</label>
                  <br />
                  <p>Some text referring to the post title</p>
              </div>

              <div className={`p-12 bg-white rounded shadow-lg rounded mt-4 w-3\/4 mx-auto`}>
                  <label className={`my-6`}>{"Post Title"}</label>
                  <br />
                  <p>Some text referring to the post title</p>
              </div>

              <div className={`p-12 bg-white rounded shadow-lg rounded mt-4 w-3\/4 mx-auto`}>
                  <label className={`my-6`}>{"Post Title"}</label>
                  <br />
                  <p>Some text referring to the post title</p>
              </div>

              <div className={`p-12 bg-white rounded shadow-lg rounded mt-4 w-3\/4 mx-auto`}>
                  <label className={`my-6`}>{"Post Title"}</label>
                  <br />
                  <p>Some text referring to the post title</p>
              </div>

              <div className={`p-12 bg-white rounded shadow-lg rounded mt-4 w-3\/4 mx-auto`}>
                  <label className={`my-6`}>{"Post Title"}</label>
                  <br />
                  <p>Some text referring to the post title</p>
              </div>

              <div className={`p-12 bg-white rounded shadow-lg rounded mt-4 w-3\/4 mx-auto`}>
                  <label className={`my-6`}>{"Post Title"}</label>
                  <br />
                  <p>Some text referring to the post title</p>
              </div>

              <div className={`p-12 bg-white rounded shadow-lg rounded mt-4 w-3\/4 mx-auto`}>
                  <label className={`my-6`}>{"Post Title"}</label>
                  <br />
                  <p>Some text referring to the post title</p>
              </div>
            </div>
        </div>  */}
      <StreamApp
        apiKey="kvtk22pfbmhk"
        appId="56076"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.9nUUq3hDsYWPoOd_rXiDc4fu27mHNmsAgm6duBh7QS0"
      >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="user-one" />
        <FlatFeed
          options={ {reactions: { recent: true } } }
          notify
          Activity={(props) =>
              <Activity {...props}
                Footer={() => (
                  <div style={ {padding: '8px 16px'} }>
                    <LikeButton {...props} />
                    <CommentField
                      activity={props.activity}
                      onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} />
                  </div>
                )}
              />
            }
          />
      </StreamApp>
        </div>
    );
  }
}

// UserProfile.propTypes = {
//   classes: PropTypes.object
// };
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        userToken: state.auth.userToken
    }
}
export default connect(mapStateToProps)(UserProfile)
// export default withStyles(styles)(UserProfile);