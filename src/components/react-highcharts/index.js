import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import Treemap from 'highcharts-treemap';
Treemap(ReactHighcharts.Highcharts);
import SampleData from './treemapdata.json';
import _ from 'lodash';
import { Card, CardTitle, CardBlock } from 'reactstrap';

export default class Charts extends Component {
	constructor(){
		super();
		this.state = {
			data: []
		}
		this.loadData = this.loadData.bind(this);
		this.renameKeys = this.renameKeys.bind(this);
	}

	componentDidMount(){
		this.loadData();
	}

	loadData(){
		this.setState({
			data: this.renameKeys(SampleData.counts)
		})
	}

	renameKeys(series) {
        var keyMap = {
            word: "name",
            count: "value"
        };
        return series.map(function(obj) {
            return _.mapKeys(obj, function(value, key) {
                return keyMap[key];
            });
        });
    }

	render(){
		const config = 
		{
			colorAxis: {
				minColor: '#cccccc',
				maxColor: Highcharts.getOptions().colors[0]
			},
			series: [{
				type: 'treemap',
				// allowDrillToNode: true,
				layoutAlgorithm: 'squarified',
				colorByPoint: true,
			// 	colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', 
   // '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
				alternateStartingDirection: true,
				dataLabels: {
					color: "contrast",
					style: {
						// "color": "contrast",
						"fontSize": "16px", 
						"fontWeight": "normal", 
						"textOutline": "none" 
					}
				},
				data: this.state.data
			}],
			title: {
				text: ''
			}
		};

		return(
			<Card>
				<CardBlock>
					<CardTitle>
						Treemap
					</CardTitle>
					<ReactHighcharts config={config} />
				</CardBlock>

			</Card>
		);
	}
}