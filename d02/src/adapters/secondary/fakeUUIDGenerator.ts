import { UUIDGenerator } from '../../core/gateways/UUIDGenerator'

export class FakeUUIDGenerator implements UUIDGenerator {
  private uuid: string

  generate(): string {
    return this.uuid
  }

  setNextUuid(uuid: string) {
    this.uuid = uuid
  }
}
