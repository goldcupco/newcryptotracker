import { replaceNulls } from '../libs/replaceNulls';
 import demoData from '../testUtils/demoData.json';
 import demoDataItem from '../testUtils/demoDataItem.json';
import { CryptoCurrencyId, CryptoData, DateStampedCryptoData, DisplayCurrency } from '../types';

// export const baseUrl = 'https://api.coinmarketcap.com/v2/ticker';
export const baseUrl = 'https://min-api.cryptocompare.com/data/top/mktcapfull';
//https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD

export const fetchCryptoCurrencies = (displayCurrency:DisplayCurrency = 'USD'):Promise<DateStampedCryptoData> => {
	// eslint-disable-next-line
	let url;

	if (displayCurrency !== 'USD') {
	//	url = `${baseUrl}/?limit=10&convert=${displayCurrency}`;
		url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${displayCurrency}`

	} else {
	//	url = `${baseUrl}/?limit=10&tsym=USD`;
		url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

	}
	console.log('in api-service displayCurrency :', displayCurrency)
	console.log('in api-service url :', url)


	// Uncomment to return demo data if API is down
//	 const cryptoData:CryptoData = replaceNulls(demoData); //demo

//	 const dateStampedDemoData = { //demo
//	 	dateStamp: new Date(),
//	 	cryptoData,
 //    };

	// return Promise.resolve(dateStampedDemoData); //demo

	return fetch(url)
		.then(response => response.json()
		)
		.then(replaceNulls)
		.then((cryptoData:CryptoData) => {
			const dateStamp = new Date();
			console.log('in api-service fetchCryptoCurrencies cryptoData:',cryptoData)

			return {
				dateStamp,
				cryptoData,
			};
		});
};

export const fetchCryptoCurrency = (
	cryptoCurrency:CryptoCurrencyId,
	displayCurrency:DisplayCurrency = 'USD',
	):Promise<DateStampedCryptoData> => {
	// eslint-disable-next-line
	let url;

	if (displayCurrency !== 'USD') {
//		url = `${baseUrl}/${cryptoCurrency}/?convert=${displayCurrency}`;
     url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=`+{displayCurrency}
		
	} else {
//		url = `${baseUrl}/${cryptoCurrency}/`;
		url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD`

	}

	// Uncomment to return demo data if API is down

/*
	24h_volume_usd: "21018472002.9"
available_supply: "4108044456.0"
id: "tether"
last_updated: "1575585083"
market_cap_usd: "4145661783.0"
max_supply: "13246546.121321"
name: "Tether"
percent_change_1h: "0.05"
percent_change_7d: "0.29"
percent_change_24h: "0.41"
price_btc: "0.00013529"
price_usd: "10091.569912"
rank: "4"
symbol: "USDT"
total_supply: "4207771504.0"
*/

//	 const cryptoData:CryptoData = replaceNulls(demoDataItem); // demo

//	 const dateStampedDemoData = { //demo
//	 	dateStamp: new Date(),
//    	cryptoData,
//	 };

//	 return Promise.resolve(dateStampedDemoData); //demo

	return fetch(url)
		.then(response => response.json())
		.then(replaceNulls)
		.then((cryptoData:CryptoData) => {
			const dateStamp = new Date();
		console.log('in api-service fetchCryptoCurrency cryptoData:',cryptoData)
		
			return {
				dateStamp,
				cryptoData,
			};
		});
};
