import { adaptRoute } from '@/main/adapters'
import { makeCreateChampionController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/champion', adaptRoute(makeCreateChampionController()))
}
