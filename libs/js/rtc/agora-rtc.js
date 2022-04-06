import RtcEngine from '@/components/Agora-RTC-JS/index'

class AgoraRtc {
	_engine
	
	constructor(props) {
		this.state = {
			appId: 'YourAppId',
			token: 'YourToken',
			channelName: 'channel-x',
			joinSucceed: false,
			peerIds: [],
		}
		
		// request mic and camera permissions
	}
	
	async init() {
		const { appId } = this.state
		this._engine = await RtcEngine.create(appId)
	    this.props.enableVideo && await this._engine.enableVideo()
		
		this._engine.addListener('Warning', (warn) => {
			console.log('Warning', warn)
		})

		this._engine.addListener('Error', (err) => {
			console.log('Error', err)
		})
		
		
		this._engine.addListener('UserJoined', (uid, elapsed) => {
			console.log('UserJoined', uid, elapsed)
			// Get current peer IDs
			const {peerIds} = this.state
			// If new user
			if (peerIds.indexOf(uid) === -1) {
				this.setState({
					// Add peer ID to state array
					peerIds: [...peerIds, uid]
				})
			}
		})

		this._engine.addListener('UserOffline', (uid, reason) => {
			console.log('UserOffline', uid, reason)
			const {peerIds} = this.state
			this.setState({
				// Remove peer ID from state array
				peerIds: peerIds.filter(id => id !== uid)
			})
		})

		// If Local user joins RTC channel
		this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
			console.log('JoinChannelSuccess', channel, uid, elapsed)
			// Set state variable to true
			this.setState({
				joinSucceed: true
			})
		})
	}

    startCall = async () => {
        // Join Channel using null token and channel name
        await this._engine?.joinChannel(this.state.token, this.state.channelName, null, 0)
    }

    endCall = async () => {
        await this._engine?.leaveChannel()
        this.setState({peerIds: [], joinSucceed: false})
    }

	setState(ns) {
		Object.assign(
			this.state,
			ns
		)
	}
}

export default AgoraRtc