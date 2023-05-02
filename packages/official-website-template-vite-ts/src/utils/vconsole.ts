import Vconsole from 'vconsole';

class VconsoleSingleton {
  private static instance: VconsoleSingleton;
  private vconsole: Vconsole;

  private constructor() {
    this.vconsole = new Vconsole();
  }

  public static getInstance(): VconsoleSingleton {
    if (!VconsoleSingleton.instance) {
      VconsoleSingleton.instance = new VconsoleSingleton();
    }
    return VconsoleSingleton.instance;
  }

  public getVconsole(): Vconsole {
    return this.vconsole;
  }
}

export default VconsoleSingleton;
