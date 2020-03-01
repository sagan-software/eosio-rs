initSidebarItems({"constant":[["ACTIVE_PERMISSION",""],["BPAY_ACCOUNT",""],["NAMES_ACCOUNT",""],["NULL_ACCOUNT",""],["RAMCORE_SYMBOL",""],["RAMFEE_ACCOUNT",""],["RAM_ACCOUNT",""],["RAM_SYMBOL",""],["REX_ACCOUNT",""],["REX_SYMBOL",""],["SAVING_ACCOUNT",""],["STAKE_ACCOUNT",""],["TOKEN_ACCOUNT",""],["VPAY_ACCOUNT",""]],"struct":[["Activate",""],["BidRefund","A bid refund, which is defined by: - the `bidder` account name owning the refund - the `amount` to be refunded Reference implementation"],["Bidname",""],["Bidrefund",""],["Buyram",""],["Buyrambytes",""],["Buyrex",""],["Claimrewards",""],["Closerex",""],["Cnclrexorder",""],["Connector",""],["Consolidate",""],["Defcpuloan",""],["Defnetloan",""],["Delegatebw",""],["DelegatedBandwidth","Every user `from` has a scope/table that uses every receipient 'to' as the primary key. https://github.com/EOSIO/eosio.contracts/blob/v1.9.0-rc3/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L283-L296"],["Deposit",""],["EosioGlobalState","Defines new global state parameters. https://github.com/EOSIO/eosio.contracts/blob/v1.9.0-rc3/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L120-L145"],["EosioGlobalState2","Defines new global state parameters added after version 1.0 https://github.com/EOSIO/eosio.contracts/blob/v1.9.0-rc3/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L147-L159"],["EosioGlobalState3","Defines new global state parameters added after version 1.3.0 https://github.com/EOSIO/eosio.contracts/blob/v1.9.0-rc3/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L161-L168"],["EosioGlobalState4",""],["ExchangeState",""],["Fundcpuloan",""],["Fundnetloan",""],["GLOBAL",""],["GLOBAL2",""],["GLOBAL3",""],["GLOBAL4",""],["Init",""],["Mvfrsavings",""],["Mvtosavings",""],["NameBid","A name bid, which consists of: - a `newname` name that the bid is for - a `high_bidder` account name that is the one with the highest bid so far - the `high_bid` which is amount of highest bid - and `last_bid_time` which is the time of the highest bid"],["Newaccount",""],["ProducerInfo","Defines `producer_info` structure to be stored in `producer_info` table, added after version 1.0 https://github.com/EOSIO/eosio.contracts/blob/v1.9.0-rc3/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L180-L200"],["ProducerInfo2","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L154-L163"],["RAMMARKET",""],["RamMarket",""],["Refund",""],["RefundRequest","https://github.com/EOSIO/eosio.contracts/blob/v1.9.0-rc3/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L298-L309"],["Regproducer",""],["Regproducer2",""],["Regproxy",""],["Rentcpu",""],["Rentnet",""],["RexBalance","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L241-L250"],["RexFund","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L231-L237"],["RexLoan","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L254-L267"],["RexOrder","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L279-L291"],["RexOrderOutcome","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L296-L300"],["RexPool","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L216-L227"],["Rexexec",""],["Rmvproducer",""],["SELF",""],["Sellram",""],["Sellrex",""],["Setabi",""],["Setacctcpu",""],["Setacctnet",""],["Setacctram",""],["Setalimits",""],["Setinflation",""],["Setparams",""],["Setpriv",""],["Setram",""],["Setramrate",""],["Setrex",""],["Undelegatebw",""],["Unregprod",""],["Unstaketorex",""],["Updaterex",""],["Updtrevision",""],["UserResources","https://github.com/EOSIO/eosio.contracts/blob/v1.9.0-rc3/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L270-L281"],["Voteproducer",""],["VoterInfo","https://github.com/EOSIO/eosio.contracts/blob/c046863a65d7e98424312ee8009f0acb493e6231/contracts/eosio.system/include/eosio.system/eosio.system.hpp#L165-L200"],["Withdraw",""]],"type":[["activate",""],["bidname",""],["bidrefund",""],["buyram",""],["buyrambytes",""],["buyrex",""],["claimrewards",""],["closerex",""],["cnclrexorder",""],["consolidate",""],["defcpuloan",""],["defnetloan",""],["delegatebw",""],["deposit",""],["fundcpuloan",""],["fundnetloan",""],["init",""],["mvfrsavings",""],["mvtosavings",""],["newaccount",""],["refund",""],["regproducer",""],["regproducer2",""],["regproxy",""],["rentcpu",""],["rentnet",""],["rexexec",""],["rmvproducer",""],["sellram",""],["sellrex",""],["setabi",""],["setacctcpu",""],["setacctnet",""],["setacctram",""],["setalimits",""],["setinflation",""],["setparams",""],["setpriv",""],["setram",""],["setramrate",""],["setrex",""],["undelegatebw",""],["unregprod",""],["unstaketorex",""],["updaterex",""],["updtrevision",""],["voteproducer",""],["withdraw",""]]});