export interface Hero {
    id: number;
    name:string;
    localized_name:string;
    primary_attr:string;
    attack_type:string;
    roles:string[];
    legs:number;
}

export class TeamStats {
    carry:number;
    initiator:number;
    nuker:number;
    support:number;
    disabler:number;
    jungler:number;
    durable:number;
    escape:number;
    pusher:number;

    constructor( teamstats ?: TeamStats) {
        this.carry =(teamstats && teamstats.carry) || 0 ;
        this.support =(teamstats && teamstats.support) || 0 ;
        this.nuker =(teamstats && teamstats.nuker) || 0 ;
        this.disabler =(teamstats && teamstats.disabler) || 0 ;
        this.jungler =(teamstats && teamstats.jungler) || 0 ;
        this.durable =(teamstats && teamstats.durable) || 0 ;
        this.escape =(teamstats && teamstats.escape) || 0 ;
        this.pusher =(teamstats && teamstats.pusher) || 0 ;
        this.initiator =(teamstats && teamstats.initiator) || 0 ;
    }

    static Create(): TeamStats {
        return new TeamStats();
    }
}



