import Actions from '../../../../src/Actions';

export default class ThreadActions extends Actions {

	clickThread(threadId) {
		this.emit('clickThread', threadId);
	}
}
