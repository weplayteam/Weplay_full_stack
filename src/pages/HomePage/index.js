import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MapComponent from '../../components/MapComponent';
import {Link, Route, Switch} from 'react-router-dom'


export default class HomePage extends Component {
    static propTypes = {
        user: PropTypes.object
    }

    render() {
        return (
            <div className={`max-w-full`}>
                <MapComponent collection={featureCollection} />
                <br/>
                <Link to="../samvid">touch me</Link>
            </div>
        )
    }
}

const featureCollection = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.618808, 29.623674]
            },
            "properties": {
                "FacilityName": "Eldridge Park",
                "FacilityType": "park",
                "Address": "2511 Eldridge Rd",
                "City": "Sugar Land",
                "State": "TX",
                "ZipCode": 77478,
                "Website": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.470328, 29.705764]
            },
            "properties": {
                "FacilityName": "Alief Community Park",
                "FacilityType": "park",
                "Address": "11903 Bellaire Blvd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77072,
                "Website": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-94.98423, 29.392187]
            },
            "properties": {
                "FacilityName": "Memorial Park",
                "FacilityType": "park",
                "Address": "6501 Memorial Dr",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77007,
                "Website": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.575193, 29.694969]
            },
            "properties": {
                "FacilityName": "Boone Road Park",
                "FacilityType": "park",
                "Address": "7700 Boone Rd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77072,
                "Website": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.70757, 29.725531]
            },
            "properties": {
                "FacilityName": "George Bush Park",
                "FacilityType": "park",
                "Address": "16756 Westheimer Pkwy",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77082,
                "Website": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.646701, 29.71015]
            },
            "properties": {
                "FacilityName": "Alief Family YMCA",
                "FacilityType": "park",
                "Address": "7850 Howell Sugar Land Rd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77083,
                "Website": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": {}
            },
            "properties": {
                "FacilityName": "",
                "FacilityType": "",
                "Address": "",
                "City": "",
                "State": "",
                "ZipCode": null,
                "Website": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.510908, 29.709095]
            },
            "properties": {
                "FacilityName": "Indoor 59",
                "FacilityType": "indoor ",
                "Address": "7115 Clarewood Dr",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77036,
                "Website": "https://www.sports59.com/indoorsoccer/"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.492973, 29.826677]
            },
            "properties": {
                "FacilityName": "Q&B INDOOR SPORTS",
                "FacilityType": "indoor ",
                "Address": "1739 Bingle Rd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77055,
                "Website": "https://www.qbsports.net"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.60626, 29.757162]
            },
            "properties": {
                "FacilityName": "Memorial Indoor Soccer",
                "FacilityType": "indoor ",
                "Address": "1322 S Dairy Ashford Rd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77077,
                "Website": "https://memorialindoor.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.559558, 29.634647]
            },
            "properties": {
                "FacilityName": "Southwest Indoor Soccer",
                "FacilityType": "indoor ",
                "Address": "12950 Sugar Ridge Blvd",
                "City": "Stafford",
                "State": "TX",
                "ZipCode": 77477,
                "Website": "https://www.letsplaysoccer.com/stafford"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.486075, 29.996855]
            },
            "properties": {
                "FacilityName": "Northwest Indoor Soccer Center",
                "FacilityType": "indoor ",
                "Address": "14647 Walters Rd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77068,
                "Website": "https://www.letsplaysoccer.com/houston"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.659963, 29.830956]
            },
            "properties": {
                "FacilityName": "West Houston Indoor Soccer",
                "FacilityType": "indoor ",
                "Address": "17115 Clay Rd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77084,
                "Website": "http://westhoustonindoor.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.361049, 29.775331]
            },
            "properties": {
                "FacilityName": "Main Street Indoor Soccer",
                "FacilityType": "indoor ",
                "Address": "615 Pinckney St",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77009,
                "Website": "https://www.mainstreetsoccer.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.449408, 29.84098]
            },
            "properties": {
                "FacilityName": "Texans Indoor Soccer",
                "FacilityType": "indoor ",
                "Address": "4137 Pinemont Dr",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77018,
                "Website": "https://www.facebook.com/pages/category/Stadium--Arena---Sports-Venue/Texans-Indoor-Soccer-249007908513755/"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.213317, 29.763789]
            },
            "properties": {
                "FacilityName": "Upper 90 Indoor Soccer Club",
                "FacilityType": "indoor ",
                "Address": "1622 Federal Rd",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77015,
                "Website": "https://www.upper90houston.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.4923728, 29.7046591]
            },
            "properties": {
                "FacilityName": "Aztec Indoor Soccer",
                "FacilityType": "indoor ",
                "Address": "6909A Hillcroft Ave",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77081,
                "Website": "https://www.facebook.com/Aztec-indoor-soccer-1-315068145650763/"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.1962108, 29.7677783]
            },
            "properties": {
                "FacilityName": "INTERNATIONAL INDOOR SOCCER",
                "FacilityType": "indoor ",
                "Address": "13024 Market St",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77015,
                "Website": "http://internationalindoor.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.60089, 29.772869]
            },
            "properties": {
                "FacilityName": "Houston Toros Center",
                "FacilityType": "indoor ",
                "Address": "785 Country Pl Dr",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77079,
                "Website": "https://www.houstontoros.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.2749332, 29.7185362]
            },
            "properties": {
                "FacilityName": "Soccer Centro",
                "FacilityType": "indoor ",
                "Address": "8333 Manchester St",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77012,
                "Website": "https://www.launidadsoccer.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-95.52962, 29.83209]
            },
            "properties": {
                "FacilityName": "Kids Soccer Academy",
                "FacilityType": "indoor ",
                "Address": "9585 Clay Rd #11 ",
                "City": "Houston",
                "State": "TX",
                "ZipCode": 77080,
                "Website": "https://ksahouston.webs.com"
            }
        }
    ]
};
