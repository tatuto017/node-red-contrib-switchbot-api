import { NodeDef } from 'node-red';

export interface ConfigDef extends NodeDef {
  token: string;
  secret: string;
}

export interface StatusDef extends NodeDef {
  authorization: string,
  deviceId: string;
}

export interface CommandDef extends NodeDef {
  authorization: string,
  deviceId: string;
  deviceType: boolean,
  command: string,
  parameter: string
}
