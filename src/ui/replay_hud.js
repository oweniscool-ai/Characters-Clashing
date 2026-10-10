export class ReplayHUDUI {
  render(ctx, currentFrame, totalFrames, isPaused, width = 1280, height = 720) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(width / 2 - 200, height - 60, 400, 40);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    const status = isPaused ? '[PAUSED]' : '[PLAYING]';
    ctx.fillText(`${status} Frame: ${currentFrame} / ${totalFrames}`, width / 2, height - 35);
    ctx.restore();
  }
}
