class Job{
  String? job;
  String skillsList(List skills){
    StringBuffer stringBuffer = StringBuffer();

    stringBuffer.write('La $job tiene las competencias');

    for(var skill in skills){
      stringBuffer.writeln(' - $skill');
    }
    return stringBuffer.toString();
  }
}