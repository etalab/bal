const errors = [
  'cle_interop.valeur_manquante',
  'cle_interop.casse_invalide',
  'cle_interop.structure_invalide',
  'cle_interop.commune_invalide',
  'cle_interop.voie_invalide',
  'cle_interop.numero_invalide',
  'cle_interop.numero_prefixe_manquant',
  'voie_nom.valeur_manquante',
  'numero.valeur_manquante',
  'numero.contient_prefixe',
  'numero.type_invalide',
  'suffixe.debut_invalide',
  'commune_insee.commune_invalide',
  'commune_deleguee_insee.commune_invalide',
  'position.valeur_invalide',
  'x.valeur_invalide',
  'x.separateur_decimal_invalide',
  'y.valeur_invalide',
  'y.separateur_decimal_invalide',
  'long.valeur_invalide',
  'long.separateur_decimal_invalide',
  'lat.valeur_invalide',
  'lat.separateur_decimal_invalide',
  'cad_parcelles.valeur_invalide',
  'cad_parcelles.pipe_debut_fin',
  'source.valeur_manquante',
  'date_der_maj.valeur_manquante',
  'date_der_maj.date_invalide',
  'row.incoherence_numero',
  'row.position_manquante',

  'field.cle_interop.missing',
  'field.commune_insee.missing',
  'field.commune_nom.missing',
  'field.commune_deleguee_insee.missing',
  'field.commune_deleguee_nom.missing',
  'field.uid_adresse.missing',
  'field.voie_nom.missing',
  'field.lieudit_complement_nom.missing',
  'field.numero.missing',
  'field.suffixe.missing',
  'field.position.missing',
  'field.long.missing',
  'field.lat.missing',
  'field.x.missing',
  'field.y.missing',
  'field.cad_parcelles.valeur_invalide',
  'field.source.missing',
  'field.date_der_maj.missing'
]

const warnings = [
  'position.enum_fuzzy'
]

module.exports = {
  code: '1.2-strict',
  name: 'BAL 1.2 Strict',
  errors,
  warnings,

  isValid({fileValidation, uniqueErrors, fields, notFoundFields}) {
    return !errors.some(e => uniqueErrors.has(e)) &&
    fileValidation.encoding.isValid &&
    fileValidation.delimiter.isValid &&
    fileValidation.linebreak.isValid &&
    notFoundFields.length === 0 &&
    fields.filter(f => f.schemaVersion && f.schemaName !== f.name).length === 0
  }
}
