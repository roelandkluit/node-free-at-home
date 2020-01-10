import { DatapointIds, ParameterIds, FreeAtHomeApi, DeviceType } from "./freeAtHomeApi"

export declare interface FreeAtHomeDelegateInterface {
    getSerialNumber(): string;
    getFrindlyName(): string;
}

export enum NodeState {
    inactive = 0,
    active,
}

export declare interface FreeAtHomeOnOffDelegateInterface extends FreeAtHomeDelegateInterface {
    setOn(value: boolean): void;
}

export declare interface FreeAtHomeWeatherBrightnessSensorDelegateInterface extends FreeAtHomeDelegateInterface {

    on(event: 'brightnessChanged', listener: (position: number) => void): this;
}

export declare interface FreeAtHomeRawDelegateInterface extends FreeAtHomeDelegateInterface {
    dataPointChanged(channel: number, id: DatapointIds, value: string): void;
    parameterChanged(id: ParameterIds, value: string): void;

    getDeviceType(): DeviceType;

    on(event: 'datapointChanged', listener: (datapointId: DatapointIds, value: string) => void): this;
}

export declare interface FreeAtHomeBlindDelegateInterface extends FreeAtHomeDelegateInterface {
    setRelativeValue(value: number): void;
    stopMovement(): void;

    getPostition(): number;
    getState(): NodeState;
    setSilentMode(silentMode: boolean): void;

    on(event: 'positionChanged', listener: (position: number) => void): this;
    on(event: 'stateChanged', listener: (state: NodeState) => void): this;
}

export declare interface FreeAtHomeChannelInterface {
    delegate: FreeAtHomeDelegateInterface;
    freeAtHome: FreeAtHomeApi;
    deviceType: DeviceType;

    dataPointChanged(channel: number, id: DatapointIds, value: string): void;
    parameterChanged(id: ParameterIds, value: string): void;
}