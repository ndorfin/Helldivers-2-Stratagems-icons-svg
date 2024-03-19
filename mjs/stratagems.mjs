export const STRATAGEMS = [
	{
		id: 'hellbomb',
		label: 'NUX-223 Hellbomb',
		group_id: 'general_stratagems',
		filename: 'hellbomb',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'orbital_illumination_flare',
		label: 'Orbital Illumination Flare',
		group_id: 'general_stratagems',
		filename: 'orbital_illumination_flare',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'prospecting_drill',
		label: 'Prospecting Drill',
		group_id: 'general_stratagems',
		filename: 'prospecting_drill',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'reinforce',
		label: 'Reinforce',
		group_id: 'general_stratagems',
		filename: 'reinforce',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'resupply',
		label: 'Resupply',
		group_id: 'general_stratagems',
		filename: 'resupply',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'seaf_artillery',
		label: 'SEAF Artillery',
		group_id: 'general_stratagems',
		filename: 'seaf_artillery',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'seismic_probe',
		label: 'Seismic Probe',
		group_id: 'general_stratagems',
		filename: 'seismic_probe',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'sos_beacon',
		label: 'SOS Beacon',
		group_id: 'general_stratagems',
		filename: 'sos_beacon',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'super_earth_flag',
		label: 'Super Earth Flag',
		group_id: 'general_stratagems',
		filename: 'super_earth_flag',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'sssd_delivery',
		label: 'SSSD Delivery',
		group_id: 'general_stratagems',
		filename: 'upload_data',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'upload_data',
		label: 'Upload Data',
		group_id: 'general_stratagems',
		filename: 'upload_data',
		type: 'mission',
		uses: -1,
		call_in_time: 0,
		cooldown: 0,
	},
	{
		id: 'hmg_emplacement',
		label: 'E/MG-101 HMG Emplacement',
		group_id: 'bridge',
		filename: 'hmg_emplacement',
		type: 'vehicle',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 10_000,
	},
	{
		id: 'orbital_ems_strike',
		label: 'Orbital EMS Strike',
		group_id: 'bridge',
		filename: 'orbital_ems_strike',
		type: 'orbital',
		uses: -1,
		call_in_time: 2,
		cooldown: 75,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 6_000,
	},
	{
		id: 'orbital_gas_strike',
		label: 'Orbital Gas Strike',
		group_id: 'bridge',
		filename: 'orbital_gas_strike',
		type: 'orbital',
		uses: -1,
		call_in_time: 2,
		cooldown: 75,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'orbital_precision_strike',
		label: 'Orbital Precision Strike',
		group_id: 'bridge',
		filename: 'orbital_precision_strike',
		type: 'orbital',
		uses: -1,
		call_in_time: 4,
		cooldown: 100,
	},
	{
		id: 'orbital_smoke_strike',
		label: 'Orbital Smoke Strike',
		group_id: 'bridge',
		filename: 'orbital_smoke_strike',
		type: 'orbital',
		uses: -1,
		call_in_time: 2,
		cooldown: 100,
		level_required: 8,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'shield_generator_relay',
		label: 'FX-12 Shield Generator Relay',
		group_id: 'bridge',
		filename: 'shield_generator_relay',
		type: 'sentry',
		uses: -1,
		call_in_time: 0,
		cooldown: 90,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 9_000,
	},
	{
		id: 'tesla_tower',
		label: 'A/ARC-3 Tesla Tower',
		group_id: 'bridge',
		filename: 'tesla_tower',
		type: 'sentry',
		uses: -1,
		call_in_time: 3,
		cooldown: 150,
		level_required: 15,
		currency_id: 'requisition_slips',
		currency_amount: 8_000,
	},
	{
		id: 'anti-personnel_minefield',
		label: 'MD-6 Anti-Personnel Minefield',
		group_id: 'engineering_bay',
		filename: 'anti-personnel_minefield',
		type: 'mines',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 1_500,
	},
	{
		id: 'arc_thrower',
		label: 'ARC-3 Arc Thrower',
		group_id: 'engineering_bay',
		filename: 'arc_thrower',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 15,
		currency_id: 'requisition_slips',
		currency_amount: 7_000,
	},
	{
		id: 'ballistic_shield_backpack',
		label: 'SH-20 Ballistic Shield Backpack',
		group_id: 'engineering_bay',
		filename: 'ballistic_shield_backpack',
		type: 'backpack',
		uses: -1,
		call_in_time: 5,
		cooldown: 300,
		level_required: 12,
		currency_id: 'requisition_slips',
		currency_amount: 6_000,
	},
	{
		id: 'grenade_launcher',
		label: 'GL-21 Grenade Launcher',
		group_id: 'engineering_bay',
		filename: 'grenade_launcher',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 6_000,
	},
	{
		id: 'guard_dog_rover',
		label: 'AX/LAS-5 "Guard Dog" Rover',
		group_id: 'engineering_bay',
		filename: 'guard_dog_rover',
		type: 'backpack',
		uses: -1,
		call_in_time: 5,
		cooldown: 480,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 7_500,
	},
	{
		id: 'incendiary_mines',
		label: 'MD-I4 Incendiary Mines',
		group_id: 'engineering_bay',
		filename: 'incendiary_mines',
		type: 'mines',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 8,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'laser_cannon',
		label: 'LAS-98 Laser Cannon',
		group_id: 'engineering_bay',
		filename: 'laser_cannon',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'shield_generator_pack',
		label: 'SH-32 Shield Generator Pack',
		group_id: 'engineering_bay',
		filename: 'shield_generator_pack',
		type: 'backpack',
		uses: -1,
		call_in_time: 5,
		cooldown: 480,
		level_required: 20,
		currency_id: 'requisition_slips',
		currency_amount: 10_000,
	},
	{
		id: 'supply_pack',
		label: 'B-1 Supply Pack',
		group_id: 'engineering_bay',
		filename: 'supply_pack',
		type: 'backpack',
		uses: -1,
		call_in_time: 5,
		cooldown: 480,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'eagle_110mm_rocket_pods',
		label: 'Eagle 110MM Rocket Pods',
		group_id: 'hangar',
		filename: 'eagle_110mm_rocket_pods',
		type: 'eagle',
		uses: 2,
		call_in_time: 0,
		cooldown: 15,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 7_500,
	},
	{
		id: 'eagle_500kg_bomb',
		label: 'Eagle 500KG Bomb',
		group_id: 'hangar',
		filename: 'eagle_500kg_bomb',
		type: 'eagle',
		uses: 1,
		call_in_time: 0,
		cooldown: -1,
		level_required: 15,
		currency_id: 'requisition_slips',
		currency_amount: 10_000,
	},
	{
		id: 'eagle_airstrike',
		label: 'Eagle Airstrike',
		group_id: 'hangar',
		filename: 'eagle_airstrike',
		type: 'eagle',
		uses: 2,
		call_in_time: 0,
		cooldown: 15,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'eagle_cluster_bomb',
		label: 'Eagle Cluster Bomb',
		group_id: 'hangar',
		filename: 'eagle_cluster_bomb',
		type: 'eagle',
		uses: 4,
		call_in_time: 0,
		cooldown: 15,
		level_required: 3,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'eagle_napalm_airstrike',
		label: 'Eagle Napalm Airstrike',
		group_id: 'hangar',
		filename: 'eagle_napalm_airstrike',
		type: 'eagle',
		uses: 2,
		call_in_time: 0,
		cooldown: 15,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 5_000,
	},
	{
		id: 'eagle_rearm',
		label: 'Eagle Rearm',
		group_id: 'hangar',
		filename: 'eagle_rearm',
		type: 'eagle',
		uses: -1,
		call_in_time: 0,
		cooldown: -1,
		level_required: 2,
	},
	{
		id: 'eagle_smoke_strike',
		label: 'Eagle Smoke Strike',
		group_id: 'hangar',
		filename: 'eagle_smoke_strike',
		type: 'eagle',
		uses: 2,
		call_in_time: 0,
		cooldown: 15,
		level_required: 8,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'eagle_strafing_run',
		label: 'Eagle Strafing Run',
		group_id: 'hangar',
		filename: 'eagle_strafing_run',
		type: 'eagle',
		uses: 2,
		call_in_time: 0,
		cooldown: 15,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 1_500,
	},
	{
		id: 'jump_pack',
		label: 'LIFT-850 Jump Pack',
		group_id: 'hangar',
		filename: 'jump_pack',
		type: 'backpack',
		uses: -1,
		call_in_time: 5,
		cooldown: 480,
		level_required: 8,
		currency_id: 'requisition_slips',
		currency_amount: 6_000,
	},
	{
		id: 'orbital_120mm_he_barrage',
		label: 'Orbital 120MM HE Barrage',
		group_id: 'orbital_cannons',
		filename: 'orbital_120mm_he_barrage',
		type: 'orbital',
		uses: -1,
		call_in_time: 5,
		cooldown: 240,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'orbital_380mm_he_barrage',
		label: 'Orbital 380MM HE Barrage',
		group_id: 'orbital_cannons',
		filename: 'orbital_380mm_he_barrage',
		type: 'orbital',
		uses: -1,
		call_in_time: 6,
		cooldown: 240,
		level_required: 8,
		currency_id: 'requisition_slips',
		currency_amount: 7_500,
	},
	{
		id: 'orbital_airburst_strike',
		label: 'Orbital Airburst Strike',
		group_id: 'orbital_cannons',
		filename: 'orbital_airburst_strike',
		type: 'orbital',
		uses: -1,
		call_in_time: 2,
		cooldown: 120,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'orbital_gatling_barrage',
		label: 'Orbital Gatling Barrage',
		group_id: 'orbital_cannons',
		filename: 'orbital_gatling_barrage',
		type: 'orbital',
		uses: -1,
		call_in_time: 2,
		cooldown: 80,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 1_500,
	},
	{
		id: 'orbital_laser',
		label: 'Orbital Laser',
		group_id: 'orbital_cannons',
		filename: 'orbital_laser',
		type: 'orbital',
		uses: 3,
		call_in_time: 2,
		cooldown: 300,
		level_required: 15,
		currency_id: 'requisition_slips',
		currency_amount: 10_000,
	},
	{
		id: 'orbital_railcannon_strike',
		label: 'Orbital Railcannon Strike',
		group_id: 'orbital_cannons',
		filename: 'orbital_railcannon_strike',
		type: 'orbital',
		uses: -1,
		call_in_time: 1,
		cooldown: 210,
		level_required: 20,
		currency_id: 'requisition_slips',
		currency_amount: 10_000,
	},
	{
		id: 'orbital_walking_barrage',
		label: 'Orbital Walking Barrage',
		group_id: 'orbital_cannons',
		filename: 'orbital_walking_barrage',
		type: 'orbital',
		uses: -1,
		call_in_time: 3,
		cooldown: 240,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 7_500,
	},
	{
		id: 'anti-materiel_rifle',
		label: 'APW-1 Anti-Materiel Rifle',
		group_id: 'patriotic_administration_center',
		filename: 'anti-materiel_rifle',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 5_000,
	},
	{
		id: 'autocannon',
		label: 'AC-8 Autocannon',
		group_id: 'patriotic_administration_center',
		filename: 'autocannon',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 7_000,
	},
	{
		id: 'expendable_anti-tank',
		label: 'EAT-17 Expendable Anti-Tank',
		group_id: 'patriotic_administration_center',
		filename: 'expendable_anti-tank',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 2,
		cooldown: 70,
		level_required: 3,
		currency_id: 'requisition_slips',
		currency_amount: 3_000,
	},
	{
		id: 'flamethrower',
		label: 'FLAM-40 Flamethrower',
		group_id: 'patriotic_administration_center',
		filename: 'flamethrower',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 6_000,
	},
	{
		id: 'machine_gun',
		label: 'MG-43 Machine Gun',
		group_id: 'patriotic_administration_center',
		filename: 'machine_gun',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
	},
	{
		id: 'railgun',
		label: 'RS-422 Railgun',
		group_id: 'patriotic_administration_center',
		filename: 'railgun',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 20,
		currency_id: 'requisition_slips',
		currency_amount: 10_000,
	},
	{
		id: 'recoilless_rifle',
		label: 'GR-8 Recoilless Rifle',
		group_id: 'patriotic_administration_center',
		filename: 'recoilless_rifle',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 6_000,
	},
	{
		id: 'spear',
		label: 'FAF-14 SPEAR Launcher',
		group_id: 'patriotic_administration_center',
		filename: 'spear',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 20,
		currency_id: 'requisition_slips',
		currency_amount: 9_000,
	},
	{
		id: 'stalwart',
		label: 'M-105 Stalwart',
		group_id: 'patriotic_administration_center',
		filename: 'stalwart',
		type: 'support_weapon',
		uses: -1,
		call_in_time: 3,
		cooldown: 480,
		level_required: 2, // Can't find a value for this
		currency_id: 'requisition_slips',
		currency_amount: 3_500,
	},
	{
		id: 'autocannon_sentry',
		label: 'A/AC-8 Autocannon Sentry',
		group_id: 'robotics_workshop',
		filename: 'autocannon_sentry',
		type: 'sentry',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 13,
		currency_id: 'requisition_slips',
		currency_amount: 6_000,
	},
	{
		id: 'ems_mortar_sentry',
		label: 'A/M-23 EMS Mortar Sentry',
		group_id: 'robotics_workshop',
		filename: 'ems_mortar_sentry',
		type: 'sentry',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 20,
		currency_id: 'requisition_slips',
		currency_amount: 8_000,
	},
	{
		id: 'gatling_sentry',
		label: 'A/G-16 Gatling Sentry',
		group_id: 'robotics_workshop',
		filename: 'gatling_sentry',
		type: 'sentry',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 5,
		currency_id: 'requisition_slips',
		currency_amount: 4_000,
	},
	{
		id: 'guard_dog',
		label: 'AX/AR-23 "Guard Dog"',
		group_id: 'robotics_workshop',
		filename: 'guard_dog',
		type: 'backpack',
		uses: -1,
		call_in_time: 5,
		cooldown: 480,
		level_required: 10,
		currency_id: 'requisition_slips',
		currency_amount: 7_500,
	},
	{
		id: 'machine_gun_sentry',
		label: 'A/MG-43 Machine Gun Sentry',
		group_id: 'robotics_workshop',
		filename: 'machine_gun_sentry',
		type: 'sentry',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 2,
		currency_id: 'requisition_slips',
		currency_amount: 1_500,
	},
	{
		id: 'mortar_sentry',
		label: 'A/M-12 Mortar Sentry',
		group_id: 'robotics_workshop',
		filename: 'mortar_sentry',
		type: 'sentry',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 8,
		currency_id: 'requisition_slips',
		currency_amount: 7_000,
	},
	{
		id: 'patriot_exosuit',
		label: 'EXO-45 Patriot Exosuit',
		group_id: 'robotics_workshop',
		filename: 'patriot_exosuit',
		type: 'vehicle',
		uses: 2,
		call_in_time: 0,
		cooldown: 600,
		level_required: 25,
		currency_id: 'requisition_slips',
		currency_amount: 20_000,
	},
	{
		id: 'rocket_sentry',
		label: 'A/MLS-4X Rocket Sentry',
		group_id: 'robotics_workshop',
		filename: 'rocket_sentry',
		type: 'sentry',
		uses: -1,
		call_in_time: 3,
		cooldown: 180,
		level_required: 15,
		currency_id: 'requisition_slips',
		currency_amount: 7_500,
	},
]