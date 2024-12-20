import { DiscoveryService } from './discovery.service';
import { v4 as uuid } from 'uuid';

export function loadPost(discoveryService: DiscoveryService, nb: number) {
  for (let i = 0; i < nb; i++) {
    discoveryService.insert({
      uuid: uuid(),
      owner: uuid(),
    });
  }
}
