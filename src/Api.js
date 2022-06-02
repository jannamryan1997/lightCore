import {api} from './Services';

export const ApiGetWallets = ()=>{
return api.get('wallets')
}