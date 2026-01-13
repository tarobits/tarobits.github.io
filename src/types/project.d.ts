export type FrontendFrameworks = 'vue';
export type BackendFrameworks = 'laravel';
export type ProgrammingLanguage = 'php' | 'ts' | 'js' | 'python';
export type License = 'MIT' | 'Apache 2.0' | 'MPL' | 'LGPL' | 'GPL' | 'AGPL';

type BaseProject = {
    name: string,
    title: string,
    description: string,
    released: boolean,
    source: 'open' | 'closed',
    icon?: string,
    links?: {
        url: string,
        text: string,
        icon?: 'github'
    }[],
    framework?: {
        frontend: FrontendFrameworks,
        backend: BackendFrameworks
    } | FrontendFrameworks | BackendFrameworks,
    languages?: Array<ProgrammingLanguage>
}

type OpenSourceProject = BaseProject & {
    source: 'open',
    license: License
}

type ClosedSourceProject = BaseProject & {
    source: 'closed'
}

type ReleasedProject = (OpenSourceProject | ClosedSourceProject) & {
    released: true,
    versionType: 'static' | 'npm',
    version: string
}

type UnReleasedProject = (OpenSourceProject | ClosedSourceProject) & {
    released: false
}

export type ProjectType = UnReleasedProject | ReleasedProject;