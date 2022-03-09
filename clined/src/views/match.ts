import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {shared} from './../styles/shared'

import '@vaadin/combo-box/vaadin-combo-box'
import '@vaadin/progress-bar/vaadin-progress-bar'

import logo from './../img/heroes/abaddon.png'
import clinkz from './../img/heroes/Clinkz_icon.png'
import bane from './../img/heroes/Bane_icon.png'
import ember_spirit from './../img/heroes/Ember_Spirit_icon.png'
import broodmother from './../img/heroes/Broodmother_icon.png'

import {Hero, TeamStats} from '../types'


@customElement('match-view')
export class MatchView extends LitElement {

  @property({ type: Number })
  count = 0
  @property({ type: JSON })
  heroes = [{
    "id": 1,
    "name": "npc_dota_hero_antimage",
    "localized_name": "Anti-Mage",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 2,
    "name": "npc_dota_hero_axe",
    "localized_name": "Axe",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Durable", "Disabler", "Jungler", "Carry"],
    "legs": 2
}, {
    "id": 3,
    "name": "npc_dota_hero_bane",
    "localized_name": "Bane",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Durable"],
    "legs": 4
}, {
    "id": 4,
    "name": "npc_dota_hero_bloodseeker",
    "localized_name": "Bloodseeker",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Jungler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 5,
    "name": "npc_dota_hero_crystal_maiden",
    "localized_name": "Crystal Maiden",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Jungler"],
    "legs": 2
}, {
    "id": 6,
    "name": "npc_dota_hero_drow_ranger",
    "localized_name": "Drow Ranger",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Disabler", "Pusher"],
    "legs": 2
}, {
    "id": 7,
    "name": "npc_dota_hero_earthshaker",
    "localized_name": "Earthshaker",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Initiator", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 8,
    "name": "npc_dota_hero_juggernaut",
    "localized_name": "Juggernaut",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Escape"],
    "legs": 2
}, {
    "id": 9,
    "name": "npc_dota_hero_mirana",
    "localized_name": "Mirana",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Escape", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 10,
    "name": "npc_dota_hero_morphling",
    "localized_name": "Morphling",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Durable", "Nuker", "Disabler"],
    "legs": 0
}, {
    "id": 11,
    "name": "npc_dota_hero_nevermore",
    "localized_name": "Shadow Fiend",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker"],
    "legs": 0
}, {
    "id": 12,
    "name": "npc_dota_hero_phantom_lancer",
    "localized_name": "Phantom Lancer",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Pusher", "Nuker"],
    "legs": 2
}, {
    "id": 13,
    "name": "npc_dota_hero_puck",
    "localized_name": "Puck",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Initiator", "Disabler", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 14,
    "name": "npc_dota_hero_pudge",
    "localized_name": "Pudge",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 15,
    "name": "npc_dota_hero_razor",
    "localized_name": "Razor",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Durable", "Nuker", "Pusher"],
    "legs": 0
}, {
    "id": 16,
    "name": "npc_dota_hero_sand_king",
    "localized_name": "Sand King",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Support", "Nuker", "Escape", "Jungler"],
    "legs": 6
}, {
    "id": 17,
    "name": "npc_dota_hero_storm_spirit",
    "localized_name": "Storm Spirit",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Nuker", "Initiator", "Disabler"],
    "legs": 2
}, {
    "id": 18,
    "name": "npc_dota_hero_sven",
    "localized_name": "Sven",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 19,
    "name": "npc_dota_hero_tiny",
    "localized_name": "Tiny",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Nuker", "Pusher", "Initiator", "Durable", "Disabler"],
    "legs": 2
}, {
    "id": 20,
    "name": "npc_dota_hero_vengefulspirit",
    "localized_name": "Vengeful Spirit",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Support", "Initiator", "Disabler", "Nuker", "Escape"],
    "legs": 2
}, {
    "id": 21,
    "name": "npc_dota_hero_windrunner",
    "localized_name": "Windranger",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Disabler", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 22,
    "name": "npc_dota_hero_zuus",
    "localized_name": "Zeus",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Nuker", "Carry"],
    "legs": 2
}, {
    "id": 23,
    "name": "npc_dota_hero_kunkka",
    "localized_name": "Kunkka",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 25,
    "name": "npc_dota_hero_lina",
    "localized_name": "Lina",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Carry", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 26,
    "name": "npc_dota_hero_lion",
    "localized_name": "Lion",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 27,
    "name": "npc_dota_hero_shadow_shaman",
    "localized_name": "Shadow Shaman",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Pusher", "Disabler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 28,
    "name": "npc_dota_hero_slardar",
    "localized_name": "Slardar",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Initiator", "Disabler", "Escape"],
    "legs": 0
}, {
    "id": 29,
    "name": "npc_dota_hero_tidehunter",
    "localized_name": "Tidehunter",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Durable", "Disabler", "Nuker", "Carry"],
    "legs": 2
}, {
    "id": 30,
    "name": "npc_dota_hero_witch_doctor",
    "localized_name": "Witch Doctor",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 31,
    "name": "npc_dota_hero_lich",
    "localized_name": "Lich",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker"],
    "legs": 2
}, {
    "id": 32,
    "name": "npc_dota_hero_riki",
    "localized_name": "Riki",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 33,
    "name": "npc_dota_hero_enigma",
    "localized_name": "Enigma",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Disabler", "Jungler", "Initiator", "Pusher"],
    "legs": 0
}, {
    "id": 34,
    "name": "npc_dota_hero_tinker",
    "localized_name": "Tinker",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Pusher"],
    "legs": 2
}, {
    "id": 35,
    "name": "npc_dota_hero_sniper",
    "localized_name": "Sniper",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker"],
    "legs": 2
}, {
    "id": 36,
    "name": "npc_dota_hero_necrolyte",
    "localized_name": "Necrophos",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Durable", "Disabler"],
    "legs": 2
}, {
    "id": 37,
    "name": "npc_dota_hero_warlock",
    "localized_name": "Warlock",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Initiator", "Disabler"],
    "legs": 2
}, {
    "id": 38,
    "name": "npc_dota_hero_beastmaster",
    "localized_name": "Beastmaster",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 39,
    "name": "npc_dota_hero_queenofpain",
    "localized_name": "Queen of Pain",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Escape"],
    "legs": 2
}, {
    "id": 40,
    "name": "npc_dota_hero_venomancer",
    "localized_name": "Venomancer",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Initiator", "Pusher", "Disabler"],
    "legs": 0
}, {
    "id": 41,
    "name": "npc_dota_hero_faceless_void",
    "localized_name": "Faceless Void",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Disabler", "Escape", "Durable"],
    "legs": 2
}, {
    "id": 42,
    "name": "npc_dota_hero_skeleton_king",
    "localized_name": "Wraith King",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Durable", "Disabler", "Initiator"],
    "legs": 2
}, {
    "id": 43,
    "name": "npc_dota_hero_death_prophet",
    "localized_name": "Death Prophet",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Pusher", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 44,
    "name": "npc_dota_hero_phantom_assassin",
    "localized_name": "Phantom Assassin",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape"],
    "legs": 2
}, {
    "id": 45,
    "name": "npc_dota_hero_pugna",
    "localized_name": "Pugna",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Nuker", "Pusher"],
    "legs": 2
}, {
    "id": 46,
    "name": "npc_dota_hero_templar_assassin",
    "localized_name": "Templar Assassin",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape"],
    "legs": 2
}, {
    "id": 47,
    "name": "npc_dota_hero_viper",
    "localized_name": "Viper",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Durable", "Initiator", "Disabler"],
    "legs": 0
}, {
    "id": 48,
    "name": "npc_dota_hero_luna",
    "localized_name": "Luna",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Pusher"],
    "legs": 2
}, {
    "id": 49,
    "name": "npc_dota_hero_dragon_knight",
    "localized_name": "Dragon Knight",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Durable", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 50,
    "name": "npc_dota_hero_dazzle",
    "localized_name": "Dazzle",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 51,
    "name": "npc_dota_hero_rattletrap",
    "localized_name": "Clockwerk",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 52,
    "name": "npc_dota_hero_leshrac",
    "localized_name": "Leshrac",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Nuker", "Pusher", "Disabler"],
    "legs": 4
}, {
    "id": 53,
    "name": "npc_dota_hero_furion",
    "localized_name": "Nature's Prophet",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Jungler", "Pusher", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 54,
    "name": "npc_dota_hero_life_stealer",
    "localized_name": "Lifestealer",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Jungler", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 55,
    "name": "npc_dota_hero_dark_seer",
    "localized_name": "Dark Seer",
    "primary_attr": "int",
    "attack_type": "Melee",
    "roles": ["Initiator", "Jungler", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 56,
    "name": "npc_dota_hero_clinkz",
    "localized_name": "Clinkz",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Pusher"],
    "legs": 2
}, {
    "id": 57,
    "name": "npc_dota_hero_omniknight",
    "localized_name": "Omniknight",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 58,
    "name": "npc_dota_hero_enchantress",
    "localized_name": "Enchantress",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Jungler", "Pusher", "Durable", "Disabler"],
    "legs": 4
}, {
    "id": 59,
    "name": "npc_dota_hero_huskar",
    "localized_name": "Huskar",
    "primary_attr": "str",
    "attack_type": "Ranged",
    "roles": ["Carry", "Durable", "Initiator"],
    "legs": 2
}, {
    "id": 60,
    "name": "npc_dota_hero_night_stalker",
    "localized_name": "Night Stalker",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 61,
    "name": "npc_dota_hero_broodmother",
    "localized_name": "Broodmother",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Escape", "Nuker"],
    "legs": 8
}, {
    "id": 62,
    "name": "npc_dota_hero_bounty_hunter",
    "localized_name": "Bounty Hunter",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Escape", "Nuker"],
    "legs": 2
}, {
    "id": 63,
    "name": "npc_dota_hero_weaver",
    "localized_name": "Weaver",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape"],
    "legs": 4
}, {
    "id": 64,
    "name": "npc_dota_hero_jakiro",
    "localized_name": "Jakiro",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Pusher", "Disabler"],
    "legs": 2
}, {
    "id": 65,
    "name": "npc_dota_hero_batrider",
    "localized_name": "Batrider",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Initiator", "Jungler", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 66,
    "name": "npc_dota_hero_chen",
    "localized_name": "Chen",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Jungler", "Pusher"],
    "legs": 2
}, {
    "id": 67,
    "name": "npc_dota_hero_spectre",
    "localized_name": "Spectre",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Escape"],
    "legs": 0
}, {
    "id": 68,
    "name": "npc_dota_hero_ancient_apparition",
    "localized_name": "Ancient Apparition",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker"],
    "legs": 0
}, {
    "id": 69,
    "name": "npc_dota_hero_doom_bringer",
    "localized_name": "Doom",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 70,
    "name": "npc_dota_hero_ursa",
    "localized_name": "Ursa",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Jungler", "Durable", "Disabler"],
    "legs": 2
}, {
    "id": 71,
    "name": "npc_dota_hero_spirit_breaker",
    "localized_name": "Spirit Breaker",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Disabler", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 72,
    "name": "npc_dota_hero_gyrocopter",
    "localized_name": "Gyrocopter",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 73,
    "name": "npc_dota_hero_alchemist",
    "localized_name": "Alchemist",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Durable", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 74,
    "name": "npc_dota_hero_invoker",
    "localized_name": "Invoker",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Disabler", "Escape", "Pusher"],
    "legs": 2
}, {
    "id": 75,
    "name": "npc_dota_hero_silencer",
    "localized_name": "Silencer",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 76,
    "name": "npc_dota_hero_obsidian_destroyer",
    "localized_name": "Outworld Destroyer",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Disabler"],
    "legs": 4
}, {
    "id": 77,
    "name": "npc_dota_hero_lycan",
    "localized_name": "Lycan",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Jungler", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 78,
    "name": "npc_dota_hero_brewmaster",
    "localized_name": "Brewmaster",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 79,
    "name": "npc_dota_hero_shadow_demon",
    "localized_name": "Shadow Demon",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 80,
    "name": "npc_dota_hero_lone_druid",
    "localized_name": "Lone Druid",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Pusher", "Jungler", "Durable"],
    "legs": 2
}, {
    "id": 81,
    "name": "npc_dota_hero_chaos_knight",
    "localized_name": "Chaos Knight",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Durable", "Pusher", "Initiator"],
    "legs": 2
}, {
    "id": 82,
    "name": "npc_dota_hero_meepo",
    "localized_name": "Meepo",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Nuker", "Disabler", "Initiator", "Pusher"],
    "legs": 2
}, {
    "id": 83,
    "name": "npc_dota_hero_treant",
    "localized_name": "Treant Protector",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Initiator", "Durable", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 84,
    "name": "npc_dota_hero_ogre_magi",
    "localized_name": "Ogre Magi",
    "primary_attr": "int",
    "attack_type": "Melee",
    "roles": ["Support", "Nuker", "Disabler", "Durable", "Initiator"],
    "legs": 2
}, {
    "id": 85,
    "name": "npc_dota_hero_undying",
    "localized_name": "Undying",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Durable", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 86,
    "name": "npc_dota_hero_rubick",
    "localized_name": "Rubick",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 87,
    "name": "npc_dota_hero_disruptor",
    "localized_name": "Disruptor",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 88,
    "name": "npc_dota_hero_nyx_assassin",
    "localized_name": "Nyx Assassin",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Disabler", "Nuker", "Initiator", "Escape"],
    "legs": 6
}, {
    "id": 89,
    "name": "npc_dota_hero_naga_siren",
    "localized_name": "Naga Siren",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Pusher", "Disabler", "Initiator", "Escape"],
    "legs": 0
}, {
    "id": 90,
    "name": "npc_dota_hero_keeper_of_the_light",
    "localized_name": "Keeper of the Light",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Jungler"],
    "legs": 2
}, {
    "id": 91,
    "name": "npc_dota_hero_wisp",
    "localized_name": "Io",
    "primary_attr": "str",
    "attack_type": "Ranged",
    "roles": ["Support", "Escape", "Nuker"],
    "legs": 0
}, {
    "id": 92,
    "name": "npc_dota_hero_visage",
    "localized_name": "Visage",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Durable", "Disabler", "Pusher"],
    "legs": 2
}, {
    "id": 93,
    "name": "npc_dota_hero_slark",
    "localized_name": "Slark",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 94,
    "name": "npc_dota_hero_medusa",
    "localized_name": "Medusa",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Disabler", "Durable"],
    "legs": 0
}, {
    "id": 95,
    "name": "npc_dota_hero_troll_warlord",
    "localized_name": "Troll Warlord",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Pusher", "Disabler", "Durable"],
    "legs": 2
}, {
    "id": 96,
    "name": "npc_dota_hero_centaur",
    "localized_name": "Centaur Warrunner",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Durable", "Initiator", "Disabler", "Nuker", "Escape"],
    "legs": 4
}, {
    "id": 97,
    "name": "npc_dota_hero_magnataur",
    "localized_name": "Magnus",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker", "Escape"],
    "legs": 4
}, {
    "id": 98,
    "name": "npc_dota_hero_shredder",
    "localized_name": "Timbersaw",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Nuker", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 99,
    "name": "npc_dota_hero_bristleback",
    "localized_name": "Bristleback",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 100,
    "name": "npc_dota_hero_tusk",
    "localized_name": "Tusk",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 101,
    "name": "npc_dota_hero_skywrath_mage",
    "localized_name": "Skywrath Mage",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 102,
    "name": "npc_dota_hero_abaddon",
    "localized_name": "Abaddon",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Carry", "Durable"],
    "legs": 2
}, {
    "id": 103,
    "name": "npc_dota_hero_elder_titan",
    "localized_name": "Elder Titan",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker", "Durable"],
    "legs": 2
}, {
    "id": 104,
    "name": "npc_dota_hero_legion_commander",
    "localized_name": "Legion Commander",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 105,
    "name": "npc_dota_hero_techies",
    "localized_name": "Techies",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Nuker", "Disabler"],
    "legs": 6
}, {
    "id": 106,
    "name": "npc_dota_hero_ember_spirit",
    "localized_name": "Ember Spirit",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Nuker", "Disabler", "Initiator"],
    "legs": 2
}, {
    "id": 107,
    "name": "npc_dota_hero_earth_spirit",
    "localized_name": "Earth Spirit",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Nuker", "Escape", "Disabler", "Initiator", "Durable"],
    "legs": 2
}, {
    "id": 108,
    "name": "npc_dota_hero_abyssal_underlord",
    "localized_name": "Underlord",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Nuker", "Disabler", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 109,
    "name": "npc_dota_hero_terrorblade",
    "localized_name": "Terrorblade",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Nuker"],
    "legs": 2
}, {
    "id": 110,
    "name": "npc_dota_hero_phoenix",
    "localized_name": "Phoenix",
    "primary_attr": "str",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Initiator", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 111,
    "name": "npc_dota_hero_oracle",
    "localized_name": "Oracle",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Escape"],
    "legs": 0
}, {
    "id": 112,
    "name": "npc_dota_hero_winter_wyvern",
    "localized_name": "Winter Wyvern",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 113,
    "name": "npc_dota_hero_arc_warden",
    "localized_name": "Arc Warden",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 114,
    "name": "npc_dota_hero_monkey_king",
    "localized_name": "Monkey King",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Disabler", "Initiator"],
    "legs": 2
}, {
    "id": 119,
    "name": "npc_dota_hero_dark_willow",
    "localized_name": "Dark Willow",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 120,
    "name": "npc_dota_hero_pangolier",
    "localized_name": "Pangolier",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Nuker", "Disabler", "Durable", "Escape", "Initiator"],
    "legs": 2
}, {
    "id": 121,
    "name": "npc_dota_hero_grimstroke",
    "localized_name": "Grimstroke",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Escape"],
    "legs": 0
}, {
    "id": 123,
    "name": "npc_dota_hero_hoodwink",
    "localized_name": "Hoodwink",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Escape", "Disabler"],
    "legs": 4
}, {
    "id": 126,
    "name": "npc_dota_hero_void_spirit",
    "localized_name": "Void Spirit",
    "primary_attr": "int",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 128,
    "name": "npc_dota_hero_snapfire",
    "localized_name": "Snapfire",
    "primary_attr": "str",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 129,
    "name": "npc_dota_hero_mars",
    "localized_name": "Mars",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Disabler", "Durable"],
    "legs": 2
}, {
    "id": 135,
    "name": "npc_dota_hero_dawnbreaker",
    "localized_name": "Dawnbreaker",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable"],
    "legs": 2
}, {
    "id": 136,
    "name": "npc_dota_hero_marci",
    "localized_name": "Marci",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Carry", "Initiator", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 137,
    "name": "npc_dota_hero_primal_beast",
    "localized_name": "Primal Beast",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Durable", "Disabler"],
    "legs": 2
}]

@property({ type: String })
userFilter = ''

@property({ type: String })
direHeroes:Hero[] = []

@property({ type: String })
direHeroIds:Number[] = []

@property({ type: String })
radiantHeroId:Number[] = []

@property({ type: String })
stats:any[] = ['Escape','Nuker', 'Jungler', 'Carry', 'Support', 'Disabler', 'Durable', 'Pusher','Initiator']

@property({ type: String })
radiantHeroes:Hero[] = []

@property({attribute:false})
radiantStats: TeamStats = TeamStats.Create()

@property({attribute:false})
direStats: TeamStats = TeamStats.Create()

static get styles() { return shared.concat(
  css`

  #search {
    margin-top:5rem;

  }

  #teams {
    width:100%;
    background:white;

  }

  .team-content{
    width:50%;
    margin:1rem;
  }

  `)}

  render() {
    return html`
    <div class="layout vertical" id="main-container">
      <div class="layout horizontal"  id="teams" >
        <div class="layout vertical team-content" id="left">
          <div class="layout horizontal" style="margin-top:1rem;">
            <div class="layout flex"></div>
            <vaadin-combo-box
              placeholder="Search hero..."
              style="width:70%;"
              clear-button-visible
              label="Find your hero"
              item-label-path="localized_name"
              item-value-path="id"
              clear-button-visible
              .items="${this.heroes}"
              @selected-item-changed=${this.onSelectedRadiant}
            ><vaadin-icon slot="prefix" icon="vaadin:search"></vaadin-icon>
            </vaadin-combo-box>
            <div class="layout flex"></div>
          </div>
          <div class="layout vertical" >
          <div class="layout horizontal top-center " style="margin:0.5rem; padding-bottom:1rem; border-bottom:2px solid #dedede; height:142px;" >

            ${this.radiantHeroes.map((hero) => {
              return  html`
                 <div  class="layout vertical" style=" padding:2px;height:142px;">
                 <div  class="layout horizontal center center-center justified" style="height:30px;">
                      <div class="layout flex"></div>
                        ${ this.heroName(hero)}
                      <div class="layout flex"></div>
                  </div>
                  <img style="height:98px;" src=${logo}/>

                  <div  class="layout horizontal center center justified" style="height:30px; background-color:#ff9c9c; margin:5px;">
                      <div class="layout flex"></div>
                      1512 / 49%
                      <div class="layout flex"></div>
                  </div>
                 </div>
                 `; })}
              </div>
              <div class="layout horizontal">
                <div class="layout vertical " style=" padding:0.4rem; height:40vh;  width:85%" >
                    ${this.radiantHeroes.map((hero) => {
                    return  html`
                        <div class="layout horizontal center " style="margin:1px; border-radius:5%; border:1px solid #dedede; height:8vh;" >
                            <div class="layout horizontal" style="width:150px;">
                                <div class="layout flex"> </div>
                                <img style="height:48px;" src=${logo}/>
                                 <div class="layout flex"> </div>
                            </div>
                            ${this.direHeroes.map((hero) => {
                                return  html`
                                <div class="layout vertical center center justified" style="height:100%; padding-left:10px; padding-right:10px; margin:5px; border-left:1px solid #dedede; ">
                                        <div class="layout flex"> </div>
                                        <img style="height:35px; border:2px solid #ff9c9c;" src=${logo}/>
                                        <div class="layout flex vertical center center justified" style="font-size:12px; font-weight: 700;">
                                            <div class="layout flex"> </div>
                                            155 / 44%
                                            <div class="layout flex"> </div>
                                        </div>
                                </div>
                                    `; })}

                        </div>

                    `; })}
                </div>
                <div style="width:10%; background-color:green; height:40vh">

                </div>
              </div>
              <div class="layout vertical top-center justified" style=" padding:0.4rem; margin:0.75rem; max-height:20vh;" >
                <!-- TEMA STATS -->
                    <div>
                        RADIANT TEAM
                    </div>
                    <div>
                        ${this.stats.map((stat) => {
                            return html` ${this.getTeamStats(stat,"radiant")}`
                        })}
                    </div>

              </div>

            </div>

            <vaadin-button @click=${this.calculateStats} >Calculate <vaadin-icon icon="vaadin:plus"></vaadin-icon></vaadin-button>
        </div>
        <!-- --------------------------------------------------------------------------RIGHT ----------------------------------------------------------->
        <div class="layout vertical team-content" id="right">
          <div class="layout horizontal" style="margin-top:1rem;">
            <div class="layout flex"></div>
            <vaadin-combo-box
              placeholder="Search hero..."
              style="width:70%;"
              clear-button-visible
              label="Find your hero"
              item-label-path="localized_name"
              item-value-path="id"
              clear-button-visible
              .items="${this.heroes}"
              @selected-item-changed=${this.onSelectedDire}
            ><vaadin-icon slot="prefix" icon="vaadin:search"></vaadin-icon>
            </vaadin-combo-box>
            <div class="layout flex"></div>
          </div>
          <div class="layout vertical" >
          <div class="layout horizontal top-center " style="margin:0.5rem; padding-bottom:1rem; border-bottom:2px solid #dedede; height:142px;" >

            ${this.direHeroes.map((hero) => {
              return  html`
                 <div  class="layout vertical" style=" padding:2px;height:142px;">
                 <div  class="layout horizontal center center justified" style="height:30px;">
                      <div class="layout flex"></div>
                        ${ this.heroName(hero)}
                      <div class="layout flex"></div>
                  </div>
                  <img style="height:98px;" src=${logo}/>
                  <div  class="layout horizontal center center justified" style="height:30px; background-color:#ff9c9c; margin:5px;">
                      <div class="layout flex"></div>
                      1512 / 49%
                      <div class="layout flex"></div>
                  </div>
                 </div>
                 `; })}
              </div>
              <div class="layout horizontal">
                <div class="layout vertical " style=" padding:0.4rem; height:40vh;  width:85%" >
                    ${this.direHeroes.map((hero) => {
                    return  html`
                        <div class="layout horizontal center " style="margin:1px; border-radius:5%; border:1px solid #dedede; height:8vh;" >
                            <div class="layout" style="margin-left:5px; margin-right:70px;">
                                <img style="height:48px;" src=${logo}/>
                            </div>
                            ${this.radiantHeroes.map((hero) => {
                                return  html`
                                <div class="layout vertical center center justified" style="height:100%; padding-left:10px; padding-right:10px; margin:5px; border-left:1px solid #dedede; border-right:1px solid #dedede;">
                                        <div class="layout flex"> </div>
                                        <img style="height:35px; border:2px solid #ff9c9c;" src=${logo}/>
                                        <div class="layout flex vertical center center justified" style="font-size:12px; font-weight: 700;">
                                            <div class="layout flex"> </div>
                                            155 / 44%
                                            <div class="layout flex"> </div>
                                        </div>
                                </div>
                                    `; })}

                        </div>

                    `; })}
                </div>
                <div style="width:10%; background-color:green; height:40vh">

                </div>
              </div>
              <div class="layout vertical top-center justified" style=" padding:0.4rem; margin:0.75rem;" >
          <!-- TEMA STATS -->
            <div>
                DIRE TEAM
            </div>
            <div>
                ${this.stats.map((stat) => {
                    return html` ${this.getTeamStats(stat,"dire")}`
                })}
            </div>

          </div>
            </div>

        </div>

      </div>
    </div>

    `
  }
  userFilterChange(e: { target: { value: string } }) {
    this.userFilter = e.target.value;
  }

  calculateStats() {
    console.log(this.radiantHeroId)
    console.log(this.direHeroIds)
    let payload = { 
        radiantTeam: this.radiantHeroId, 
        direTeam: this.direHeroIds
    }
    fetch('http://localhost:8080/match', {
        method: 'POST',
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(payload)}).then(res =>{
            debugger
        })
        .then(res => {
            debugger
            // The response has an `any` type, so we need to cast
            // it to the `User` type, and return it from the promise

            return res 
    })
  }

  private onSelectedRadiant(e: CustomEvent) {
    for (var key in e.detail.value.roles) {
        if (!e.detail.value.roles.hasOwnProperty(key)) continue;
        var obKey = e.detail.value.roles[key];

        this.setTeamStat(obKey, this.radiantStats )
      };
    this.radiantHeroes.push(e.detail)
    this.radiantHeroId.push(e.detail.value.id)
    console.log(e,this.radiantStats)
    this.requestUpdate()
  }

  private onSelectedDire(e: CustomEvent) {
    for (var key in e.detail.value.roles) {
        if (!e.detail.value.roles.hasOwnProperty(key)) continue;
        var obKey = e.detail.value.roles[key];
        this.setTeamStat(obKey, this.direStats )
    };
    this.direHeroes.push(e.detail)
    this.direHeroIds.push(e.detail.value.id)
    this.requestUpdate()
  }

  heroName(name:any) {
      console.log(name)
      return String(name.value.localized_name)
  }

  getTeamStats(stat:string , team:string) {
    console.log(this.radiantStats)
    console.log(">>>>>>>>>>>>>>>>>>>>")
    console.log(this.direStats)
      let numbers = [];
      switch(stat) {
        case "Carry":
            numbers= this.compareStats(this.radiantStats.carry, this.direStats.carry)
          break;
          case "Initiator":
            numbers = this.compareStats(this.radiantStats.initiator, this.direStats.initiator)
              break;
          break;
          case "Nuker":
            numbers = this.compareStats(this.radiantStats.nuker, this.direStats.nuker)
              break;
          break;
          case "Support":
            numbers = this.compareStats(this.radiantStats.support, this.direStats.support)
              break;
          break;
          case "Disabler":
            numbers = this.compareStats(this.radiantStats.disabler, this.direStats.disabler)
              break;
          break;
          case "Jungler":
            numbers = this.compareStats(this.radiantStats.jungler, this.direStats.jungler)
              break;
          break;
          case "Durable":
            numbers = this.compareStats(this.radiantStats.durable, this.direStats.durable)
              break;
          break;
          case "Escape":
            numbers = this.compareStats(this.radiantStats.escape, this.direStats.escape)
              break;
          break;
          case "Pusher":
            numbers = this.compareStats(this.radiantStats.pusher, this.direStats.pusher)
              break;
          break;
        default:
          // code block
      }
      if (numbers == undefined ) {
          return html``
      } else if (team != numbers[2]) {
          return html``
      }

      return html`
        <div  style="font-family: var(--lumo-font-family); color: var(--lumo-secondary-text-color);">
            <div style="display: flex; justify-content: space-between;">
                <div>${stat}</div>
                <div>${numbers[0]}/${numbers[1]}</div>
            </div>
            <vaadin-progress-bar min="0" max="100" value=${(numbers[0]/numbers[1])*100}></vaadin-progress-bar>
        </div>
      `
  }

  compareStats(radiant_stat: number , dire_stat:number): any {
      if (radiant_stat > dire_stat && radiant_stat - dire_stat > 1) {
        return  [radiant_stat, radiant_stat + dire_stat, "radiant"];
      } else if (radiant_stat < dire_stat &&  dire_stat - radiant_stat  > 1 ) {
        return  [dire_stat, radiant_stat + dire_stat, "dire"];
      }
  }

  private setTeamStat(name:string, list:TeamStats ) {

    switch(name) {
        case "Carry":
          list.carry =list?.carry +1
          break;
          case "Initiator":
              // code block
              list.initiator =list.initiator +1
          break;
          case "Nuker":
              // code block
              list.nuker =list.nuker +1
          break;
          case "Support":
              // code block
              list.support =list.support +1
          break;
          case "Disabler":
              // code block
              list.disabler =list.disabler +1
          break;
          case "Jungler":
              // code block
              list.jungler =list.jungler +1
          break;
          case "Durable":
              // code block
              list.durable =list.durable +1
          break;
          case "Escape":
              // code block
              list.escape =list.escape +1
          break;
          case "Pusher":
              // code block
              list.pusher =list.pusher +1
          break;
        default:
          // code block
      }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'match-view': MatchView
  }
}
