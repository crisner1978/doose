import type { HomePageQueryResult } from './types'

export type HomePageQueryResultNonNullable = NonNullable<HomePageQueryResult>

export type HomePageQueryResultPageBuilderNonNullable = NonNullable<HomePageQueryResultNonNullable['pageBuilder']>

export type ExtractHomePageSectionNonNullable<
  TSection extends HomePageQueryResultPageBuilderNonNullable[number]['_type'],
> = Extract<HomePageQueryResultPageBuilderNonNullable[number], { _type: TSection }>
