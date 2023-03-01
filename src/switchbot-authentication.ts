import { Node, NodeAPI } from 'node-red';
import { ConfigDef } from './SwitchbotDef';

export default function authenticationNode(RED: NodeAPI): void {
  RED.nodes.registerType('switchbot-authentication', function (this: Node, config: ConfigDef): void {
    RED.nodes.createNode(this, config);
  });
}

module.exports = authenticationNode;
