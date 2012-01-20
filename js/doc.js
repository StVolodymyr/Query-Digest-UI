//SELECT CONCAT("'", LOWER(name), "' : '", url, "',") AS k FROM help_topic WHERE name NOT LIKE '% %' AND LENGTH(url) > 0;

var help_topic = {
    'min' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'join' : 'http://dev.mysql.com/doc/refman/5.1/en/join.html',
    'hex' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'replace' : 'http://dev.mysql.com/doc/refman/5.1/en/replace.html',
    'contains' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'srid' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#general-geometry-property-functions',
    'current_timestamp' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'variance' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'var_samp' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'concat' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'datetime' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-type-overview.html',
    'open' : 'http://dev.mysql.com/doc/refman/5.1/en/open.html',
    'integer' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'lower' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'month' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'tinyint' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'master_pos_wait' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'regexp' : 'http://dev.mysql.com/doc/refman/5.1/en/regexp.html',
    '^' : 'http://dev.mysql.com/doc/refman/5.1/en/bit-functions.html',
    'within' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'week' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'prepare' : 'http://dev.mysql.com/doc/refman/5.1/en/prepare.html',
    'lock' : 'http://dev.mysql.com/doc/refman/5.1/en/lock-tables.html',
    'updatexml' : 'http://dev.mysql.com/doc/refman/5.1/en/xml-functions.html',
    'polygon' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-mysql-specific-functions',
    'minute' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'day' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'mid' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'uuid' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'linestring' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-mysql-specific-functions',
    'sleep' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'connection_id' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'delete' : 'http://dev.mysql.com/doc/refman/5.1/en/delete.html',
    'round' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'nullif' : 'http://dev.mysql.com/doc/refman/5.1/en/control-flow-functions.html',
    'close' : 'http://dev.mysql.com/doc/refman/5.1/en/close.html',
    'timediff' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'use' : 'http://dev.mysql.com/doc/refman/5.1/en/use.html',
    'linefromtext' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'addtime' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'spatial' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-indexes.html',
    'timestampdiff' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'upper' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'from_unixtime' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'mediumblob' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'ifnull' : 'http://dev.mysql.com/doc/refman/5.1/en/control-flow-functions.html',
    'least' : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    '=' : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'reverse' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'isnull' : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'binary' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'boundary' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#general-geometry-property-functions',
    'point' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-mysql-specific-functions',
    'current_user' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'lcase' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    '<=' : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'update' : 'http://dev.mysql.com/doc/refman/5.1/en/update.html',
    'abs' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'polyfromwkb' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'space' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'geometrycollection' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-mysql-specific-functions',
    'max' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    '*' : 'http://dev.mysql.com/doc/refman/5.1/en/arithmetic-functions.html',
    'timestamp' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-type-overview.html',
    'des_decrypt' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'endpoint' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#linestring-property-functions',
    'compress' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'insert' : 'http://dev.mysql.com/doc/refman/5.1/en/insert.html',
    'count' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'handler' : 'http://dev.mysql.com/doc/refman/5.1/en/handler.html',
    'mlinefromtext' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'geomcollfromwkb' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'boolean' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'default' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'mod' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'tinytext' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'decode' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    '<=>' : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'reset' : 'http://dev.mysql.com/doc/refman/5.1/en/reset.html',
    'get_lock' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'ucase' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'mpolyfromwkb' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'iterate' : 'http://dev.mysql.com/doc/refman/5.1/en/iterate-statement.html',
    'do' : 'http://dev.mysql.com/doc/refman/5.1/en/do.html',
    'curtime' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'char_length' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'bigint' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'set' : 'http://dev.mysql.com/doc/refman/5.1/en/set-option.html',
    'conv' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'date' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-type-overview.html',
    'assign-value' : 'http://dev.mysql.com/doc/refman/5.1/en/assignment-operators.html',
    'extract' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'encrypt' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'extractvalue' : 'http://dev.mysql.com/doc/refman/5.1/en/xml-functions.html',
    'old_password' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'format' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    '||' : 'http://dev.mysql.com/doc/refman/5.1/en/logical-operators.html',
    'bit_length' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'exteriorring' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#polygon-property-functions',
    'geomfromwkb' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'multipolygon' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-mysql-specific-functions',
    'time_format' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'left' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'rand' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'rpad' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'dec' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'var_pop' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'elt' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    '~' : 'http://dev.mysql.com/doc/refman/5.1/en/bit-functions.html',
    'text' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'concat_ws' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'row_count' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'asin' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'sign' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'sec_to_time' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'float' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'locate' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'charset' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'subdate' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'dayofyear' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'longtext' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    '%' : 'http://dev.mysql.com/doc/refman/5.1/en/arithmetic-functions.html',
    'kill' : 'http://dev.mysql.com/doc/refman/5.1/en/kill.html',
    'disjoint' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'astext' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-to-convert-geometries-between-formats.html',
    'lpad' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'overlaps' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'numgeometries' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#geometrycollection-property-functions',
    'monthname' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'mbrequal' : 'http://dev.mysql.com/doc/refman/5.1/en/relations-on-geometry-mbr.html',
    'character_length' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'crc32' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'xor' : 'http://dev.mysql.com/doc/refman/5.1/en/logical-operators.html',
    'startpoint' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#linestring-property-functions',
    'grant' : 'http://dev.mysql.com/doc/refman/5.1/en/grant.html',
    'mpolyfromtext' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'mbrintersects' : 'http://dev.mysql.com/doc/refman/5.1/en/relations-on-geometry-mbr.html',
    'bit_or' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'yearweek' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'log10' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'sqrt' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'decimal' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'geometryn' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#geometrycollection-property-functions',
    '<<' : 'http://dev.mysql.com/doc/refman/5.1/en/bit-functions.html',
    'md5' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    '<' : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'unix_timestamp' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'dayofmonth' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'ascii' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'div' : 'http://dev.mysql.com/doc/refman/5.1/en/arithmetic-functions.html',
    'geometry' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-columns.html',
    'numpoints' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#linestring-property-functions',
    '&' : 'http://dev.mysql.com/doc/refman/5.1/en/bit-functions.html',
    'localtimestamp' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'assign-equal' : 'http://dev.mysql.com/doc/refman/5.1/en/assignment-operators.html',
    'convert' : 'http://dev.mysql.com/doc/refman/5.1/en/cast-functions.html',
    'adddate' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'smallint' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'ord' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'envelope' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#general-geometry-property-functions',
    'is_free_lock' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'touches' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'inet_aton' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'uncompress' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'auto_increment' : 'http://dev.mysql.com/doc/refman/5.1/en/example-auto-increment.html',
    'issimple' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#general-geometry-property-functions',
    'geomcollfromtext' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'current_time' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'revoke' : 'http://dev.mysql.com/doc/refman/5.1/en/revoke.html',
    'last_insert_id' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'last_day' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'mediumint' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'floor' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'rtrim' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'explain' : 'http://dev.mysql.com/doc/refman/5.1/en/explain.html',
    'degrees' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'varchar' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'unhex' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'std' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'cos' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'tan' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'pi' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'weekofyear' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    '/' : 'http://dev.mysql.com/doc/refman/5.1/en/arithmetic-functions.html',
    'stddev_samp' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'schema' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'mlinefromwkb' : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'log2' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'subtime' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'uncompressed_length' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'pow' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'dual' : 'http://dev.mysql.com/doc/refman/5.1/en/select.html',
    'instr' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'now' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    '>=' : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'exp' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'longblob' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'pointn' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#linestring-property-functions',
    'sum' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'oct' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'sysdate' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'asbinary' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-to-convert-geometries-between-formats.html',
    'makedate' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'mbroverlaps' : 'http://dev.mysql.com/doc/refman/5.1/en/relations-on-geometry-mbr.html',
    'soundex' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'mbrtouches' : 'http://dev.mysql.com/doc/refman/5.1/en/relations-on-geometry-mbr.html',
    'varbinary' : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'union' : 'http://dev.mysql.com/doc/refman/5.1/en/union.html',
    'to_days' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'leave' : 'http://dev.mysql.com/doc/refman/5.1/en/leave-statement.html',
    '!' : 'http://dev.mysql.com/doc/refman/5.1/en/logical-operators.html',
    'double' : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'time' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-type-overview.html',
    '&&' : 'http://dev.mysql.com/doc/refman/5.1/en/logical-operators.html',
    'x' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#point-property-functions',
    'system_user' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'found_rows' : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'crosses' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'bit_xor' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'current_date' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'area' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#polygon-property-functions',
    'flush' : 'http://dev.mysql.com/doc/refman/5.1/en/flush.html',
    'describe' : 'http://dev.mysql.com/doc/refman/5.1/en/describe.html',
    'stddev_pop' : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'substring' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'isempty' : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#general-geometry-property-functions',
    'ltrim' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'intersects' : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'call' : 'http://dev.mysql.com/doc/refman/5.1/en/call.html',
    'mbrdisjoint' : 'http://dev.mysql.com/doc/refman/5.1/en/relations-on-geometry-mbr.html',
    'values' : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'substring_index' : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'encode' : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'loop' : 'http://dev.mysql.com/doc/refman/5.1/en/loop-statement.html',
    'truncate' : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'timestampadd' : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'show'              : 'http://dev.mysql.com/doc/refman/5.1/en/show.html',
    'greatest'          : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'binlog'            : 'http://dev.mysql.com/doc/refman/5.1/en/binlog.html',
    'bit_and'           : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'second'            : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'atan2'             : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'mbrcontains'       : 'http://dev.mysql.com/doc/refman/5.1/en/relations-on-geometry-mbr.html',
    'hour'              : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'select'            : 'http://dev.mysql.com/doc/refman/5.1/en/select.html',
    'cot'               : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'load_file'         : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'pointfromtext'     : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'group_concat'      : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'date_format'       : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'benchmark'         : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'year'              : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'name_const'        : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'release_lock'      : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'convert_tz'        : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'time_to_sec'       : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'weekday'           : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'export_set'        : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'date_add'          : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'cast'              : 'http://dev.mysql.com/doc/refman/5.1/en/cast-functions.html',
    'period_diff'       : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'like'              : 'http://dev.mysql.com/doc/refman/5.1/en/string-comparison-functions.html',
    'multipoint'        : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-mysql-specific-functions',
    '>>'                : 'http://dev.mysql.com/doc/refman/5.1/en/bit-functions.html',
    'fetch'             : 'http://dev.mysql.com/doc/refman/5.1/en/fetch.html',
    'avg'               : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'mbrwithin'         : 'http://dev.mysql.com/doc/refman/5.1/en/relations-on-geometry-mbr.html',
    'session_user'      : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'in'                : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'quote'             : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'quarter'           : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'position'          : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'is_used_lock'      : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'polyfromtext'      : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'des_encrypt'       : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'ceil'              : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'length'            : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'str_to_date'       : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'y'                 : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#point-property-functions',
    'numinteriorrings'  : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#polygon-property-functions',
    'interiorringn'     : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#polygon-property-functions',
    'utc_time'          : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'stddev'            : 'http://dev.mysql.com/doc/refman/5.1/en/group-by-functions.html',
    'date_sub'          : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'period_add'        : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    '|'                 : 'http://dev.mysql.com/doc/refman/5.1/en/bit-functions.html',
    'geomfromtext'      : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'uuid_short'        : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'right'             : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'datediff'          : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'bin'               : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'multilinestring'   : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-mysql-specific-functions',
    'localtime'         : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'mpointfromtext'    : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkt-functions',
    'blob'              : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'sha1'              : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'substr'            : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'password'          : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'char'              : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'utc_date'          : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'dimension'         : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#general-geometry-property-functions',
    'bit'               : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'equals'            : 'http://dev.mysql.com/doc/refman/5.1/en/functions-that-test-spatial-relationships-between-geometries.html',
    'interval'          : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'from_days'         : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'bit_count'         : 'http://dev.mysql.com/doc/refman/5.1/en/bit-functions.html',
    'octet_length'      : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'utc_timestamp'     : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'aes_encrypt'       : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    '+'                 : 'http://dev.mysql.com/doc/refman/5.1/en/arithmetic-functions.html',
    'inet_ntoa'         : 'http://dev.mysql.com/doc/refman/5.1/en/miscellaneous-functions.html',
    'acos'              : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'isolation'         : 'http://dev.mysql.com/doc/refman/5.1/en/set-transaction.html',
    'ceiling'           : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'sin'               : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'dayofweek'         : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'linefromwkb'       : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'geometrytype'      : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#general-geometry-property-functions',
    'trim'              : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'is'                : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'get_format'        : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'tinyblob'          : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'savepoint'         : 'http://dev.mysql.com/doc/refman/5.1/en/savepoint.html',
    'user'              : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'mpointfromwkb'     : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'merge'             : 'http://dev.mysql.com/doc/refman/5.1/en/merge-storage-engine.html',
    '>'                 : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'microsecond'       : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'constraint'        : 'http://dev.mysql.com/doc/refman/5.1/en/innodb-foreign-key-constraints.html',
    'field'             : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'maketime'          : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'curdate'           : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'enum'              : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'database'          : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'pointfromwkb'      : 'http://dev.mysql.com/doc/refman/5.1/en/creating-spatial-values.html#gis-wkb-functions',
    'power'             : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'atan'              : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'strcmp'            : 'http://dev.mysql.com/doc/refman/5.1/en/string-comparison-functions.html',
    'mediumtext'        : 'http://dev.mysql.com/doc/refman/5.1/en/string-type-overview.html',
    'ln'                : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'return'            : 'http://dev.mysql.com/doc/refman/5.1/en/return.html',
    'log'               : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    '!='                : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'while'             : 'http://dev.mysql.com/doc/refman/5.1/en/while-statement.html',
    'aes_decrypt'       : 'http://dev.mysql.com/doc/refman/5.1/en/encryption-functions.html',
    'dayname'           : 'http://dev.mysql.com/doc/refman/5.1/en/date-and-time-functions.html',
    'coercibility'      : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'int'               : 'http://dev.mysql.com/doc/refman/5.1/en/numeric-type-overview.html',
    'glength'           : 'http://dev.mysql.com/doc/refman/5.1/en/geometry-property-functions.html#linestring-property-functions',
    'radians'           : 'http://dev.mysql.com/doc/refman/5.1/en/mathematical-functions.html',
    'collation'         : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'coalesce'          : 'http://dev.mysql.com/doc/refman/5.1/en/comparison-operators.html',
    'version'           : 'http://dev.mysql.com/doc/refman/5.1/en/information-functions.html',
    'make_set'          : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
    'find_in_set'       : 'http://dev.mysql.com/doc/refman/5.1/en/string-functions.html',
}

function generateMysqlLinks() {

    $( ' span.syntax_alpha,'
      +' span.syntax_punct'
      ).each(function() {
        var txt = $(this).text().toLowerCase();
        if (help_topic[txt])
            $(this).html('<a target="_blank" href="'+help_topic[txt]+'">'+$(this).html()+'</a>');
        });

}

$(generateMysqlLinks);
