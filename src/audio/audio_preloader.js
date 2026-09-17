import { sfxLoader } from './sfx_loader.js';
import { SFX_REGISTRY } from './sfx_registry.js';

export async function preloadAllCoreAudio() {
  const promises = Object.entries(SFX_REGISTRY).map(([key, url]) =>
    sfxLoader.loadSound(key, url)
  );
  await Promise.all(promises);
  console.log('All core audio assets preloaded.');
}
