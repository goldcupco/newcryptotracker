import React from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import appConfig from '../../appConfig.json';
import arrowDown from '../../assets/arrowDown.svg';
import arrowUp from '../../assets/arrowUp.svg';
import { CryptoData, DisplayCurrency } from '../../types/index.js';

import './TableRows.scss';


const displayCurrenciesMap = appConfig.displayCurrencies;
const decimalScale = 2;

interface TableRowsProps {
	items: CryptoData;
	displayCurrency: DisplayCurrency;
}

function TableRows(props: TableRowsProps) {
	//console.log('in TableRows props.items:',props.items);
	let myJSON = JSON.stringify(props.items);
	//console.log('in Tablerows myJSON:',myJSON);

	var jsonData = JSON.parse(myJSON);
	var theCurrency = 'USD'
	for (var i = 0; i < jsonData.Data.length; i++) {
		var myData = jsonData.Data[i];
		console.log('in TableRows myData:', myData);

		console.log('in TableRows myData.i:', i);
		console.log('in TableRows myData.coinInfo.Name:', myData.CoinInfo.Name);

		console.log('in TableRows myData.coinInfo.ImageUrl:', myData.CoinInfo.ImageUrl);
		console.log('in TableRows myData.DISPLAY.USD.PRICE:', myData.DISPLAY.USD.PRICE);
		console.log('in TableRows myData.DISPLAY.USD.MKTCAP:', myData.DISPLAY.USD.MKTCAP);


	}






	return (

		<>
		

				 {
					jsonData.Data.map((item: any) =>
						<tr className='table-rows' key={item.CoinInfo.Name}>
							<td className='table-rows__data table-rows__data-left'>
								<Link to={item.CoinInfo.Name} className='table-rows__link'>
									{item.id}  {item.CoinInfo.Name}
								</Link>
							</td>
							<td className='table-rows__data'>
								<Link to={item.CoinInfo.Name} className='table-rows__link'>
									<NumberFormat
										value={item.DISPLAY.USD.PRICE}
										displayType={'text'}
										thousandSeparator={true}
										prefix={displayCurrenciesMap[props.displayCurrency]}
										decimalScale={decimalScale}
									/>
								</Link>
							</td>
							<td className='table-rows__data'>
								<Link to={item.CoinInfo.Name} className='table-rows__link'>
									<NumberFormat
										value={item.DISPLAY.USD.MKTCAP}
										displayType={'text'}
										thousandSeparator={true}
										prefix={displayCurrenciesMap[props.displayCurrency]}
										decimalScale={decimalScale}
									/>
								</Link>
							</td>


							<td className='table-rows__data table-rows__data-right'>
						<Link
							to={item.name}
							className={Number(item.DISPLAY.USD.CHANGEPCT24HOUR)  > 0 ?
								'table-rows__link table-rows__data-green'
									:
								'table-rows__link table-rows__data-red'}
						>
							<NumberFormat
								value={item.DISPLAY.USD.CHANGEPCT24HOUR}
								displayType={'text'}
								thousandSeparator={true}
								suffix={'%'}
								decimalScale={decimalScale}
							/>
							{Number(item.DISPLAY.USD.CHANGEPCT24HOUR) > 0 ?
								<img className='table-rows__data-arrow' alt='up arrow icon' src={arrowUp} />
								:
								<img className='table-rows__data-arrow' alt='down arrow icon' src={arrowDown} />
							}
						</Link>
					</td>

						</tr>
					)
				}

		
		</>



	)
}

/*

			{(myData.map)(item : 'any' => (
				<tr className='table-rows' key={item.CoinInfo.Name}>
					<td className='table-rows__data table-rows__data-left'>
						<Link to={item.CoinInfo.Name} className='table-rows__link'>
							{item.id}  {item.CoinInfo.Name}
						</Link>
					</td>
					<td className='table-rows__data'>
						<Link to={item.CoinInfo.Name} className='table-rows__link'>
							<NumberFormat
								value={item.DISPLAY.USD.PRICE}
								displayType={'text'}
								thousandSeparator={true}
								prefix={displayCurrenciesMap[props.displayCurrency]}
								decimalScale={decimalScale}
							/>
						</Link>
					</td>
					
				</tr>
			))} 
*/


/*
			{(props.items.map)(item => (
				<tr className='table-rows' key={item.name}>
					<td className='table-rows__data table-rows__data-left'>
						<Link to={item.name} className='table-rows__link'>
							{item.rank}  {item.name}
						</Link>
					</td>
					<td className='table-rows__data'>
						<Link to={item.name} className='table-rows__link'>
							<NumberFormat
								value={item.price_usd}
								displayType={'text'}
								thousandSeparator={true}
								prefix={displayCurrenciesMap[props.displayCurrency]}
								decimalScale={decimalScale}
							/>
						</Link>
					</td>
					<td className='table-rows__data'>
						<Link to={item.name} className='table-rows__link'>
							<NumberFormat
								value={item.market_cap_usd}
								displayType={'text'}
								thousandSeparator={true}
								prefix={displayCurrenciesMap[props.displayCurrency]}
								decimalScale={decimalScale}
							/>
						</Link>
					</td>
					<td className='table-rows__data table-rows__data-right'>
						<Link
							to={item.name}
							className={Number(item.percent_change_24h)  > 0 ?
								'table-rows__link table-rows__data-green'
									:
								'table-rows__link table-rows__data-red'}
						>
							<NumberFormat
								value={item.percent_change_24h}
								displayType={'text'}
								thousandSeparator={true}
								suffix={'%'}
								decimalScale={decimalScale}
							/>
							{Number(item.percent_change_24h) > 0 ?
								<img className='table-rows__data-arrow' alt='up arrow icon' src={arrowUp} />
								:
								<img className='table-rows__data-arrow' alt='down arrow icon' src={arrowDown} />
							}
						</Link>
					</td>
				</tr>
			))}  */

export default TableRows;

