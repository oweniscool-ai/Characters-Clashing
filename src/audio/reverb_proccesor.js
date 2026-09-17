import { audioEngine } from './audio_context.js';

export function createSimpleDelayNode(delayTime = 0.2, feedback = 0.3) {
  audioEngine.init();
  const ctx = audioEngine.ctx;

  const delayNode = ctx.createDelay();
  const feedbackNode = ctx.createGain();

  delayNode.delayTime.value = delayTime;
  feedbackNode.gain.value = feedback;

  delayNode.connect(feedbackNode);
  feedbackNode.connect(delayNode);

  return { delayNode, feedbackNode };
}
